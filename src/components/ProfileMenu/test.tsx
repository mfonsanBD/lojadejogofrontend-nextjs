import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render menu', () => {
    render(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByText(/sign out/i)).toBeInTheDocument()
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/me" />)

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
