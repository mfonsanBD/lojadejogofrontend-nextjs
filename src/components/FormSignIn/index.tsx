import { Email, ErrorOutline, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormError, FormLink, FormLoading, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FieldErrors, signInValidate } from 'utils/validations'
import * as S from './styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }
    setLoading(false)

    setFormError('Usuário e senha invalidos')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline size={20} /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="E-mail"
          type="email"
          onInputChange={(v) => handleInput('email', v!)}
          icon={<Email />}
          error={fieldError?.email}
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          onInputChange={(v) => handleInput('password', v!)}
          icon={<Lock />}
          error={fieldError?.password}
        />

        <Link href="/forgot-password" passHref>
          <S.ForgotPassword href="#">Esqueci minha senha</S.ForgotPassword>
        </Link>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Entrar Agora</span>}
        </Button>

        <FormLink>
          Não tem uma conta?{' '}
          <Link href="/sign-up">
            <a>Cadastre-se</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
