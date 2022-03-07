import { gql } from '@apollo/client'
import { GamesFragment } from 'graphql/fragments/game'

export const QUERY_ORDERS = gql`
  query QueryOrders($identifier: ID!) {
    orders(sort: "created_at:DESC", where: { user: { id: $identifier } }) {
      id
      created_at
      card_brand
      card_last4
      games {
        ...GamesFragment
      }
    }
  }
  ${GamesFragment}
`
