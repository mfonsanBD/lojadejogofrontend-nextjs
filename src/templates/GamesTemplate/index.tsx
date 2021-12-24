import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({
  games = [],
  filterItems = []
}: GamesTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={() => console.log('filter')}
      />

      <section>
        <Grid>
          {games.map((game) => (
            <GameCard {...game} key={game.title} />
          ))}
        </Grid>

        <S.ShowMore role="button" onClick={() => console.log('show more')}>
          <p>Show More</p>
          <ArrowDown size={32} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default GamesTemplate
