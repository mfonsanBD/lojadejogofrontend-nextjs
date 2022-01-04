import { gql } from '@apollo/client'

export const GamesFragment = gql`
  fragment GamesFragment on Game {
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
`
