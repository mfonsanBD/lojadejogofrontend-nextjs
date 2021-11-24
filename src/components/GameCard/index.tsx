/* eslint-disable @next/next/no-img-element */
import {
  AddShoppingCart,
  FavoriteBorder,
  Favorite
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import * as S from './styles'

export type GameCardProps = {
  img: string
  title: string
  developer: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
}

const GameCard = ({
  img,
  title,
  developer,
  price,
  promotionalPrice,
  favorite = false,
  onFav
}: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>

      <S.FavoriteButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavoriteButton>

      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
