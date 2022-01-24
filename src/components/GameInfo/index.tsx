import { FavoriteBorder } from '@styled-icons/material-outlined'

import Ribbon from 'components/Ribbon'
import Button from 'components/Button'
import Heading from 'components/Heading'

import * as S from './styles'
import FormatPrice from 'utils/formatPrice'
import CartButton from 'components/CartButton'

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
      <Button size="large" icon={<FavoriteBorder />} minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
