import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Info } from '@styled-icons/material-outlined/Info'
import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentForm from 'components/PaymentForm'
import Showcase from 'components/Showcase'
import { Session } from 'next-auth'
import { NextSeo } from 'next-seo'
import Base from 'templates/Base'
import * as S from './styles'

export type CartTemplateProps = {
  session: Session
  recommendedTitle: string
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
} & CartListProps

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`)

const Cart = ({
  session,
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: CartTemplateProps) => {
  return (
    <Base>
      <NextSeo title="Meu Carrinho - Won Games" />
      <Container>
        <Heading lineLeft lineColor="secondary">
          Meu Carrinho
        </Heading>

        <S.Content>
          <CartList />

          <Elements stripe={stripe}>
            <PaymentForm session={session} />
          </Elements>
        </S.Content>

        <S.Text>
          <Info size={18} /> Sua compra está protegida por uma conexão segura da
          plataforma WON. Ao comprar em nossa loja você concorda com os nossos{' '}
          <a href="#">termos de uso.</a> Depois de fazer a compra tem direito a
          um reembolso no prazo máximo de 30 dias, sem qualquer custo adicional,
          desde que o download do jogo adquirido não esteja disponível após sua
          compra.
        </S.Text>

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        highlight={recommendedHighlight}
        games={recommendedGames}
      />
    </Base>
  )
}

export default Cart
