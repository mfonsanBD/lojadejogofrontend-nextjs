import { gql } from '@apollo/client'

export const BannerFragments = gql`
  fragment BannerFragments on Banner {
    img {
      url
    }
    title
    subtitle
    button {
      label
      link
    }
    ribbon {
      text
      color
      size
    }
  }
`
