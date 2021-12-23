import Cart, { CartTemplateProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function Index(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedHighlight: highlightMock,
      recommendedGames: gamesMock.slice(0, 5),
      items: itemsMock,
      total: 'R$ 430,00',
      cards: cardsMock
    }
  }
}
