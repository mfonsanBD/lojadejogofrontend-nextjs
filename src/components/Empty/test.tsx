import { render, screen } from 'utils/test-utils'
import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /um gamer no sofá jogando videogame/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /voltar a página inicial/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render link when haslink not passed', () => {
    render(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /voltar a página inicial/i })
    ).not.toBeInTheDocument()
  })
})
