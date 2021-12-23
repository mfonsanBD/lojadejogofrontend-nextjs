/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import { useState } from 'react'
import { Add, ShoppingCart } from 'styled-icons/material-outlined'
import * as S from './styles'

export type PaymentCard = {
  cardNumber: string
  flag: string
  image: string
}

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)
  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom lineColor="primary" color="black" size="small">
          Payment
        </Heading>
        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.cardNumber}>
              <S.CardInfo>
                <img src={card.image} alt={card.flag} />
                {card.cardNumber}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.cardNumber}
                value={card.cardNumber}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>

      <S.Footer>
        <Button as="a" minimal fullWidth>
          Continue Shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy Now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
