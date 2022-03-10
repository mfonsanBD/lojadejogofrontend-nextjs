import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'

import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'
import Empty from 'components/Empty'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'

import Base from 'templates/Base'

import * as S from './styles'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'

import { useQueryGames } from 'graphql/queries/games'
import { parseQueryStringToWhere, parseQueryStringToFilter } from 'utils/filter'
import { getImageUrl } from 'utils/formatImageUrl'
import { NextSeo } from 'next-seo'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems = [] }: GamesTemplateProps) => {
  const { push, query } = useRouter()
  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>loading...</p>
  const { games, gamesConnection } = data
  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.games.length
      }
    })
  }

  return (
    <Base>
      <NextSeo
        title="Games - Won Games"
        description="Search your favorite game here."
        canonical={`https://won-games-self.vercel.app/games`}
        openGraph={{
          url: `https://won-games-self.vercel.app/games`,
          title: 'Games - Won Games',
          description: 'Search your favorite game here'
        }}
      />
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map((game) => (
                  <GameCard
                    key={game.slug}
                    id={game.id}
                    title={game.name}
                    slug={game.slug}
                    developer={game.developers[0].name}
                    img={`${getImageUrl(game.cover!.url)}`}
                    price={game.price}
                  />
                ))}
              </Grid>

              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more games..."
                    />
                  ) : (
                    <S.ShowMoreButton onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":'("
              description="We didn't find any game with this filter"
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
