import GamesTemplate, { GamesTemplateProps } from 'templates/GamesTemplate'

import filtersMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filtersMock
    }
  }
}
