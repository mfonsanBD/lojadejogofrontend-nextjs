import {
  BannerMapper,
  cartMapper,
  GameMapper,
  HighlightMapper,
  OrdersMapper
} from '.'

import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_newGamesSection_highlight
} from '../../graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

describe('BannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      img: { url: 'http://localhost:1337/image.jpg' },
      title: 'Banner Title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'small'
      }
    } as QueryHome_banners

    expect(BannerMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1337/image.jpg',
        title: 'Banner Title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('GameMapper()', () => {
  it('should return an empty array if there are no game', () => {
    expect(GameMapper(null)).toStrictEqual([])
  })

  it('should return the right format when mapped', () => {
    const game = {
      id: '1',
      name: 'Game Name',
      slug: 'game-slug',
      developers: [{ name: 'Developer Name' }],
      price: 10,
      cover: {
        url: '/image.jpg'
      }
    } as QueryGames_games

    expect(GameMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'Game Name',
        slug: 'game-slug',
        developer: 'Developer Name',
        img: '/image.jpg',
        price: 10
      }
    ])
  })
})

describe('HighlightMapper()', () => {
  it('should return an empty array if there are no game', () => {
    expect(HighlightMapper(null)).toStrictEqual({})
  })

  it('should return the right format when mapped', () => {
    const highlight = {
      title: 'title',
      subtitle: 'subtitle',
      background: {
        url: '/image.jpg'
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      float_image: {
        url: '/image.jpg'
      }
    } as QueryHome_sections_newGamesSection_highlight

    expect(HighlightMapper(highlight)).toStrictEqual({
      title: 'title',
      subtitle: 'subtitle',
      background: 'http://localhost:1337/image.jpg',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      float_image: 'http://localhost:1337/image.jpg'
    })
  })
})

describe('cartMapper()', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const game = {
      id: '1',
      cover: {
        url: '/image.jpg'
      },
      name: 'game',
      price: 10
    } as QueryGames_games

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1337/image.jpg',
        title: 'game',
        price: '$10.00'
      }
    ])
  })
})

describe('OrdersMapper()', () => {
  it('should return empty array if no orders', () => {
    expect(OrdersMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: 'visa',
        card_last4: '4242',
        created_at: '2022-03-03T14:06:22.111Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 10
          }
        ]
      }
    ] as QueryOrders_orders[]

    expect(OrdersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'visa',
          img: '/img/cards/visa.png',
          number: '**** **** **** 4242',
          purchaseDate: 'Purchase made on Mar 3, 2022'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00'
          }
        ]
      }
    ])
  })

  it('should return free games when its free', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: null,
        card_last4: null,
        created_at: '2022-03-03T14:06:22.111Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer'
              }
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg'
            },
            price: 0
          }
        ]
      }
    ] as QueryOrders_orders[]

    expect(OrdersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on Mar 3, 2022'
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: 'Free'
          }
        ]
      }
    ])
  })
})
