import { gql } from '@apollo/client'
import { BannerFragments } from 'graphql/fragments/banner'
import { GamesFragment } from 'graphql/fragments/game'
import { HomeFragment } from 'graphql/fragments/home'

export const QUERY_HOME = gql`
  query QueryHome {
    banners(sort: "id:ASC") {
      ...BannerFragments
    }
    sections: home {
      ...HomeFragment
    }
    newGames: games(
      sort: "release_date:DESC"
      limit: 6
      where: { release_date_lte: "2022-01-04" }
    ) {
      ...GamesFragment
    }
  }

  ${BannerFragments}
  ${HomeFragment}
  ${GamesFragment}
`
