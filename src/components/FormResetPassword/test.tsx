import userEvent from '@testing-library/user-event'
import { signIn } from 'next-auth/client'
import 'server.mock'
import { render, screen, waitFor } from 'utils/test-utils'
import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword />', () => {
  it('should render correctly form', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirmar Senha')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /resetar senha/i })
    ).toBeInTheDocument()
  })

  it('should show validation error', async () => {
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Senha'), '123456789')
    userEvent.type(screen.getByPlaceholderText('Confirmar Senha'), '987654321')

    userEvent.click(screen.getByRole('button', { name: /resetar senha/i }))

    expect(
      await screen.findByText(
        /a confirmação de senha não bate com a senha informada/i
      )
    ).toBeInTheDocument()
  })

  it('should show error when code provided is wrong', async () => {
    query = { code: 'wrong_code' }
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Senha'), '123456789')
    userEvent.type(screen.getByPlaceholderText('Confirmar Senha'), '123456789')

    userEvent.click(screen.getByRole('button', { name: /resetar senha/i }))

    expect(
      await screen.findByText(/código informado está incorreto./i)
    ).toBeInTheDocument()
  })

  it('should reset the password and sign in the user', async () => {
    query = { code: 'right_code' }

    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Senha'), '123456789')
    userEvent.type(screen.getByPlaceholderText('Confirmar Senha'), '123456789')

    userEvent.click(screen.getByRole('button', { name: /resetar senha/i }))

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '123456789',
        callbackUrl: '/'
      })
    })
  })
})
