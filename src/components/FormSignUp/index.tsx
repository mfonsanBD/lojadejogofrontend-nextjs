import { useMutation } from '@apollo/client'
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormError, FormLink, FormLoading, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FieldErrors, signUpValidate } from 'utils/validations'
import { UsersPermissionsRegisterInput } from '../../graphql/generated/globalTypes'

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
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
          name="username"
          placeholder="Usuário"
          type="text"
          error={fieldError?.username}
          onInputChange={(v) => handleInput('username', v!)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="E-mail"
          type="text"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v!)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Senha"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v!)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirmar Senha"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v!)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Cadastrar Agora</span>}
        </Button>

        <FormLink>
          Tem uma conta?{' '}
          <Link href="/sign-in">
            <a>Entrar</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
