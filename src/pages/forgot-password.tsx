import FormForgotPassword from 'components/FormForgotPassword'
import { NextSeo } from 'next-seo'
import Auth from 'templates/Auth'

export default function ForgotPassword() {
  return (
    <Auth title="Request New Password">
      <NextSeo title="Forgot Password - Won Games" />
      <FormForgotPassword />
    </Auth>
  )
}
