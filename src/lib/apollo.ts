import {ApolloClient, InMemoryCache}  from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rebw8d0zf301wgc22n2iri/master',
  cache: new InMemoryCache()
})