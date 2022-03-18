import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'
import filtersMock from 'components/ExploreSidebar/mock'
import 'session.mock'
import apolloCache from 'utils/apolloCache'
import { render, screen } from 'utils/test-utils'
import GamesTemplate from '.'
import { fetchMoreMock, gamesMock, noGamesMock } from './mocks'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

describe('<GamesTemplate />', () => {
  it('should render sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <GamesTemplate filterItems={filtersMock} />
      </MockedProvider>
    )

    // we wait until we have data to get the elements
    // get => tem certeza do elemento
    // query => Não tem o elemento
    // find => processos assincronos
    expect(await screen.findByText(/Price/i)).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /mostrar mais/i })
    ).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <GamesTemplate filterItems={filtersMock} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    userEvent.click(await screen.findByLabelText(/low to high/i))

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })

  it('should render empty when no games found', async () => {
    render(
      <MockedProvider mocks={[noGamesMock]} addTypename={false}>
        <GamesTemplate filterItems={filtersMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByText(/não encontramos nenhum jogo com este filtro/i)
    ).toBeInTheDocument()
  })
})
