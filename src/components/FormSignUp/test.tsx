import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from 'utils/test-utils'
import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/usuário/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirmar Senha')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /cadastrar agora/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the text and link to sign In', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )
    expect(screen.getByText(/tem uma conta\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /entrar/i })).toBeInTheDocument()
  })
})
