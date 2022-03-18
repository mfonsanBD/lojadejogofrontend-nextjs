import FormResetPassword from 'components/FormResetPassword'
import { NextSeo } from 'next-seo'
import Auth from 'templates/Auth'

export default function ResetPassword() {
  return (
    <Auth title="Resetar sua Senha">
      <NextSeo title="Resetar Senha - Won Games" />
      <FormResetPassword />
    </Auth>
  )
}
