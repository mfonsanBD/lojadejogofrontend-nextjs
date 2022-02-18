import { gql } from '@apollo/client'
import { GamesFragment } from 'graphql/fragments/game'

export const MUTATION_CREATE_WISHLIST = gql`
  mutation MutationCreateWishlist($input: createWishlistInput) {
    createWishlist(input: $input) {
      wishlist {
        id
        games {
          ...GamesFragment
        }
      }
    }
  }

  ${GamesFragment}
`

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlist($input: updateWishlistInput) {
    updateWishlist(input: $input) {
      wishlist {
        id
        games {
          ...GamesFragment
        }
      }
    }
  }

  ${GamesFragment}
`
