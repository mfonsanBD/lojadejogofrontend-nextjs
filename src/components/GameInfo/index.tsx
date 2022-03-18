import CartButton from 'components/CartButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import WishlistButton from 'components/WishlistButton'
import FormatPrice from 'utils/formatPrice'
import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper data-cy="gameInfo">
    <Heading lineBottom lineColor="primary" color="black">
      {title}
    </Heading>

    <Ribbon color="secondary">
      {price === 0 ? 'Grátis' : FormatPrice(price)}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} hasText size="large" />
      <WishlistButton id={id} hasText size="large" />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
