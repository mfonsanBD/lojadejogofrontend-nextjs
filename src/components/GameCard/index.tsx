/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'

import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import FormatPrice from 'utils/formatPrice'
import FormatImageUrl from 'utils/formatImageUrl'

import * as S from './styles'

export type GameCardProps = {
  id: string
  img: string
  title: string
  slug: string
  developer: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  id,
  img,
  title,
  slug,
  developer,
  price,
  promotionalPrice,
  ribbon,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}

    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <Image
          src={FormatImageUrl(img)}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.FavoriteButton>
        <WishlistButton id={id} />
      </S.FavoriteButton>

      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{FormatPrice(price)}</S.Price>
        )}
        <S.Price>
          {price === 0 ? 'Free' : FormatPrice(promotionalPrice || price)}
        </S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
