import { useState } from "react"
import { Configure, Index } from "react-instantsearch-hooks-web"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Results from "../components/Results"
import aa from 'search-insights';

function Search() {

const [user, setUser] = useState('anonymous');
const [index, setIndex] = useState('federated_ecomm_PRODUCTS');
const [userIP, updateUserIP] = useState();
aa("setUserToken", user);

  return (
    <>
     <Header setUser={setUser} activeUser={user}/>
        <Index indexName={index}>
        <Configure
            analytics={true}
            enablePersonalization={user.length > 0 ? 'true' : 'false'}
            userToken={user}
            aroundLatLngViaIP={userIP}
        />
        <div className="container mx-auto">
        <main className='grid grid-cols-4 gap-4'>
            <Sidebar setIP={updateUserIP} activeIP={userIP} activeIndex={index} setIndex={setIndex}/>
            <Results activeIndex={index} setIndex={setIndex}/>
        </main>
        </div>
        </Index>
    </>

  )
}
export default Search