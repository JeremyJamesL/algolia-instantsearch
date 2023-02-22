import './App.css';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import Header from './components/Header';
import Results from './components/Results';
import Sidebar from './components/Sidebar';
import { useState, createContext } from 'react';
import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares';
import { useInstantSearch, Configure } from 'react-instantsearch-hooks-web';
import { useLayoutEffect } from 'react';
import aa from 'search-insights';
const searchClient = algoliasearch('YSWWVAX5RB', '9fb3db0222f7b5aef0e2b30791ee6201');

/* Insights */
function InsightsMiddleware() {

    const {use} = useInstantSearch();
    
    useLayoutEffect(() => {
      const middleware = createInsightsMiddleware({
        insightsClient: aa,
      })

      return use(middleware);
    }, [use]);

    return null;
}


export const IndexContext = createContext();


function App() {

  const [userIP, updateUserIP] = useState();
  const [user, setUser] = useState('');  
  const [index, setIndex] = useState('federated_ecomm_PRODUCTS');
  aa("setUserToken", user);

  return (
    <IndexContext.Provider value={{index, setIndex}}>
    <InstantSearch searchClient={searchClient} indexName={index}>
      <InsightsMiddleware/>
      <Configure
        analytics={true}
        enablePersonalization={true}
        userToken={user}
        aroundLatLngViaIP={userIP}
      />
        <Header setUser={setUser} activeUser={user}/>
        <div className="container mx-auto">
        <main className='grid grid-cols-4 gap-4'>
            <Sidebar setIP={updateUserIP} activeIP={userIP} />
            <Results />
        </main>
        </div>
    </InstantSearch>
    </IndexContext.Provider>
  );
}

export default App;
