import { BannerMapper, cartMapper, GameMapper, HighlightMapper } from '.'

import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_newGamesSection_highlight
} from '../../graphql/generated/QueryHome'

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
