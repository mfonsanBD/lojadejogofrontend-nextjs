import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Ribbon from 'components/Ribbon'
import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'
import FormatPrice from 'utils/formatPrice'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black">
      {title}
    </Heading>

    <Ribbon color="secondary">
      {price === 0 ? 'Free' : FormatPrice(price)}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button size="large" icon={<AddShoppingCart />}>
        Add to Cart
      </Button>
      <Button size="large" icon={<FavoriteBorder />} minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
