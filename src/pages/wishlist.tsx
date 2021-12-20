import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function Index(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedHighlight: highlightMock,
      recommendedGames: gamesMock.slice(0, 5)
    }
  }
}
