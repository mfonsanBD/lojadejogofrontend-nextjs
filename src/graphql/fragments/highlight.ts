import { gql } from '@apollo/client'
import { Image } from 'graphql/fragments/image'

export const HighlightFragment = gql`
  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      ...Image
    }
    float_image {
      ...Image
    }
    buttonLabel
    buttonLink
    alignment
  }
  ${Image}
`
