import { render, screen } from 'utils/test-utils'
import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2021-12-16T09:16:00',
  platforms: ['windows', 'mac', 'linux'],
  publisher: 'CD Projekt Red',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /desenvolvedoras/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /data de lançamento/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /plataformas/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /editora/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /classificação/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /gênero/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /mac/i }))
    expect(screen.getByRole('img', { name: /linux/i }))
    expect(screen.getByRole('img', { name: /windows/i }))
  })

  it('should render release date formated', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('16 de dezembro de 2021')).toBeInTheDocument()
  })

  it('should render developer', () => {
    render(<GameDetails {...props} />)
    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument()
  })

  it('should render publisher', () => {
    render(<GameDetails {...props} />)
    expect(screen.getByText(/CD Projekt Red/i)).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    render(<GameDetails {...props} />)
    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...props} rating="BR18" />)
    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    render(<GameDetails {...props} rating="BR18" />)
    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
