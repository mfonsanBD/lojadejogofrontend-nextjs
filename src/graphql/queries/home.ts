import { gql } from '@apollo/client'
import { BannerFragments } from 'graphql/fragments/banner'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragments
    }
  }

  ${BannerFragments}
`
