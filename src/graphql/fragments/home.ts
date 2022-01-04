import { gql } from '@apollo/client'
import { GamesFragment } from './game'
import { HighlightFragment } from './highlight'

export const HomeFragment = gql`
  fragment HomeFragment on Home {
    newGamesSection: newGames {
      title
      highlight {
        ...HighlightFragment
      }
    }

    popularGamesSection: popularGames {
      title
      highlight {
        ...HighlightFragment
      }
      games {
        ...GamesFragment
      }
    }

    upcomingGamesSection: upcomingGames {
      title
      highlight {
        ...HighlightFragment
      }
    }

    freeGamesSection: freeGames {
      title
      highlight {
        ...HighlightFragment
      }
    }
  }

  ${HighlightFragment}
  ${GamesFragment}
`
