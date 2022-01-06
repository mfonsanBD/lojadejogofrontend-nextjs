import {
  QueryHome_banners,
  QueryHome_sections_freeGamesSection_highlight
} from 'graphql/generated/QueryHome'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import FormatImageUrl from './formatImageUrl'

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

export const GameMapper = (games: QueryGames_games[] | null | undefined) => {
  return (
    games &&
    games.map((game) => ({
      title: game.name,
      slug: game.slug,
      developer: game.developers[0].name,
      img: game.cover?.url,
      price: game.price
    }))
  )
}

export const HighlightMapper = (
  highlight: QueryHome_sections_freeGamesSection_highlight | null | undefined
) => {
  return (
    highlight && {
      img: FormatImageUrl(highlight.background!.url),
      floatImage: FormatImageUrl(highlight.float_image!.url),
      title: highlight.title,
      subtitle: highlight.subtitle,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  )
}
