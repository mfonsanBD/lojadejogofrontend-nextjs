import OrdersList, { OrdersListProps } from 'components/OrdersList'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import { GetServerSidePropsContext } from 'next'
import { NextSeo } from 'next-seo'
import Profile from 'templates/Profile'
import { initializeApollo } from 'utils/apollo'
import { OrdersMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <NextSeo title="Meus Pedidos - Won Games" />
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id as string
    },
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      items: OrdersMapper(data.orders),
      session
    }
  }
}
