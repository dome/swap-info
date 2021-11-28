import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

// TODO: sashimi subgraph
export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://5.9.154.108:8000/subgraphs/name/mar/swap2',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://5.9.154.108:8030/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://5.9.154.108:8000/subgraphs/name/mar/swap2',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const blockClient = new ApolloClient({
  // todo: 更改为kovan或者主网链接
  link: new HttpLink({
    uri: 'http://5.9.154.108:8000/subgraphs/name/blocklytics/ethereum-blocks',
  }),
  cache: new InMemoryCache()
})
