import FormResetPassword from 'components/FormResetPassword'
import { NextSeo } from 'next-seo'
import Auth from 'templates/Auth'

export default function ResetPassword() {
  return (
    <Auth title="Reset Your Password">
      <NextSeo title="Reset Password - Won Games" />
      <FormResetPassword />
    </Auth>
  )
}
