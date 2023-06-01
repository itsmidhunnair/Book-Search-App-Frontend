import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import RouterComp from './Routes';

import './assets/css/common.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  //* These Options prevent cacheing in Browser
  // const defaultOptions = {
  //   watchQuery: {
  //     fetchPolicy: 'no-cache',
  //     errorPolicy: 'ignore',
  //   },
  //   query: {
  //     fetchPolicy: 'no-cache',
  //     errorPolicy: 'all',
  //   },
  // }

  const client = new ApolloClient({
    uri: process.env.REACT_APP_BASE_URL,
    cache: new InMemoryCache(),
    // defaultOptions: defaultOptions,
  });

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RouterComp />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
