import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query GET_GAMES($limit: Int!) {
    games(limit: $limit) {
      name
      slug
      developers {
        name
      }
      price
      cover {
        url
      }
    }
  }
`
