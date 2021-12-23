/* eslint-disable @next/next/no-img-element */
import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <S.Wrapper>
    <Heading lineBottom size="small" color="black">
      My Cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.cardNumber}>
        <img src={card.image} alt={card.flag} />
        {card.cardNumber}
      </S.Card>
    ))}
  </S.Wrapper>
)

export default CardsList
