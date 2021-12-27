import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Index() {
  return (
    <Base>
      <Empty
        title="404: Page Not Found"
        description="Ops...! this page does not exists. Go back to the store and enjoy our offers"
        hasLink
      />
    </Base>
  )
}
