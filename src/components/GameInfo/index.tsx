import Ribbon from 'components/Ribbon'
import Heading from 'components/Heading'

import * as S from './styles'
import FormatPrice from 'utils/formatPrice'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black">
      {title}
    </Heading>

    <Ribbon color="secondary">
      {price === 0 ? 'Free' : FormatPrice(price)}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} hasText size="large" />
      <WishlistButton id={id} hasText size="large" />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
