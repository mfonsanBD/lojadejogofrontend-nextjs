import Empty from 'components/Empty'
import { NextSeo } from 'next-seo'
import Base from 'templates/Base'

export default function Index() {
  return (
    <Base>
      <NextSeo title="Página Não Encontrada - Won Games" />
      <Empty
        title="404: Página Não Encontrada"
        description="Ops...! esta página não existe. Volte para a loja e aproveite nossas ofertas."
        hasLink
      />
    </Base>
  )
}
