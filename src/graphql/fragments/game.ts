import { gql } from '@apollo/client'

export const GamesFragment = gql`
  fragment GamesFragment on Game {
    id
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
