import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGamesSection_highlight
} from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import { getImageUrl } from 'utils/formatImageUrl'
import FormatPrice from 'utils/formatPrice'

export const BannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `${getImageUrl(banner.img?.url)}`,
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
        img: `${getImageUrl(game.cover?.url)}`,
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
        background: `${getImageUrl(highlight.background!.url)}`,
        float_image: `${getImageUrl(highlight.float_image!.url)}`,
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
        img: `${getImageUrl(game.cover?.url)}`,
        title: game.name,
        price: FormatPrice(game.price)
      }))
    : []
}

export const OrdersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Jogo Gratuito',
            purchaseDate: `Compra feita em ${new Intl.DateTimeFormat('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `${getImageUrl(game.cover?.url)}`,
            price: game.price ? FormatPrice(game.price) : 'Grátis'
          }))
        }
      })
    : []
}
