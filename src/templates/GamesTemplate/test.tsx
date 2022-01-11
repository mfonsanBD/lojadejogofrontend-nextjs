import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'

import filtersMock from 'components/ExploreSidebar/mock'

import { fetchMoreMock, gamesMock } from './mocks'

import GamesTemplate from '.'
import userEvent from '@testing-library/user-event'
import apolloCache from 'utils/apolloCache'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

describe('<GamesTemplate />', () => {
  it('should render the loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <GamesTemplate filterItems={filtersMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
  })

  it('should render the sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <GamesTemplate filterItems={filtersMock} />
      </MockedProvider>
    )

    //it starts without data
    //shows loading
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()

    //we wait until we have data to get the element
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <GamesTemplate filterItems={filtersMock} />
      </MockedProvider>
    )
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()
    userEvent.click(await screen.findByRole('button', { name: /show more/i }))
    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })
})
