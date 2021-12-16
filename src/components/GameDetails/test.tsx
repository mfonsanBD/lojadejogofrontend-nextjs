import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2021-12-16T09:16:00',
  platforms: ['windows', 'mac', 'linux'],
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /publishers/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /mac/i }))
    expect(screen.getByRole('img', { name: /linux/i }))
    expect(screen.getByRole('img', { name: /windows/i }))
  })

  it('should render release date formated', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Dec 16, 2021')).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)
    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)
    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
