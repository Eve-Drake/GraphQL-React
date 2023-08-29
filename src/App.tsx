import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client"
import DisplayData from './DisplayData'
import './index.css'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

const LIST_COUNTRIES = gql`
  {
      countries{
          name
          code
          capital
          native
          emoji
      }
  }
`;

function App() {
  const {data} = useQuery(LIST_COUNTRIES, {client});


  return (
    <>
      <DisplayData data={data}/>
      
    </>
  )
}

export default App
