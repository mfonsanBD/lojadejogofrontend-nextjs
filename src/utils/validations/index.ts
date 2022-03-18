import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({
      tlds: { allow: false }
    })
    .required(),
  password: Joi.string().min(8).required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'A confirmação de senha não bate com a senha informada'
    })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objErrors: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objErrors.error) {
    objErrors.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations)
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>
export function signInValidate(values: SignInValues) {
  const { email, password } = fieldsValidations

  const schema = Joi.object({ email, password })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ForgotValues = Pick<UsersPermissionsRegisterInput, 'email'>
export function forgotValidate(values: ForgotValues) {
  const { email } = fieldsValidations

  const schema = Joi.object({ email })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ResetValues = {
  password: string
  confirm_password: string
}
export function resetValidate(values: ResetValues) {
  const { password, confirm_password } = fieldsValidations
  const schema = Joi.object({ password, confirm_password })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
