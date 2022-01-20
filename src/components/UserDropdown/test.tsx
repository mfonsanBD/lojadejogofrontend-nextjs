import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="anorak" />)

    expect(screen.getByText('anorak')).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="anorak" />)

    userEvent.click(screen.getByText(/anorak/i))

    expect(
      screen.getByRole('link', { name: /my account/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
