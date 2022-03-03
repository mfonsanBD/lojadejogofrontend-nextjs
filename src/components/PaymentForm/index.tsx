/* eslint-disable @next/next/no-img-element */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { PaymentIntent, StripeCardElementChangeEvent } from '@stripe/stripe-js'
import Button from 'components/Button'
import { FormLoading } from 'components/Form'
import Heading from 'components/Heading'
import { useCart } from 'hooks/use-cart'
import { Session } from 'next-auth'
import React, { useState, useEffect } from 'react'
import { ShoppingCart, ErrorOutline } from '@styled-icons/material-outlined'
import { createPayment, createPaymentIntent } from 'utils/stripe/methods'
import * as S from './styles'
import { useRouter } from 'next/router'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const { push } = useRouter()
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        // faz chamada a API /orders/create-payment-intent
        // envia os items do carrinho
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string
        })

        // se freeGames for true => setFreeGames
        // faz o fluxo de jogos gratuitos
        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        // se tiver erro
        // setError
        if (data.error) {
          setError(data.error)
          return
        } else {
          // se o paymentIntent for válido
          // setClientSecret
          setFreeGames(false)
          setClientSecret(data.client_secret)
        }
      }
    }
    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setIsDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items,
      paymentIntent,
      token: session.jwt as string
    })

    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    // se for gratuito
    if (freeGames) {
      // salva no banco e redireciona para a success
      // faz chamada a API /orders
      saveOrder()

      // envia os items do carrinho
      push('/success')
      return
    }

    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)

      console.log('Yeeeei! Compra realizada.')

      //salvar a compra no banco de dados
      saveOrder(payload.paymentIntent)
      // redirecionar para a página de sucesso
      push('/success')
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading lineBottom lineColor="primary" color="black" size="small">
            Payment
          </Heading>

          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: { base: { fontSize: '16px' } }
              }}
              onChange={handleChange}
            />
          )}

          {error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>

        <S.Footer>
          <Button as="a" minimal fullWidth>
            Continue Shopping
          </Button>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (isDisabled || !!error)}
          >
            {!loading && <span>Buy Now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
