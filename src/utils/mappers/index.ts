import {
  QueryHome_banners,
  QueryHome_sections_freeGamesSection_highlight
} from 'graphql/generated/QueryHome'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import FormatImageUrl from 'utils/formatImageUrl'
import FormatPrice from 'utils/formatPrice'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'

export const BannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: banner.img?.url,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonSize: banner.ribbon.size,
      ribbonColor: banner.ribbon.color
    })
  }))
}

export const GameMapper = (
  games: QueryGames_games[] | QueryWishlist_wishlists_games[] | null | undefined
) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url,
        price: game.price
      }))
    : []
}

export const HighlightMapper = (
  highlight: QueryHome_sections_freeGamesSection_highlight | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        background: `${FormatImageUrl(highlight.background!.url)}`,
        float_image: `${FormatImageUrl(highlight.float_image!.url)}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: `${FormatImageUrl(game.cover!.url)}`,
        title: game.name,
        price: FormatPrice(game.price)
      }))
    : []
}
