import { render, screen } from 'utils/test-utils'
import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    render(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /meu perfil/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('textbox', { name: /usuário/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument()
  })
})
