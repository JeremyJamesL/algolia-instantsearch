import { useContext } from "react"
import { IndexContext } from "../App"

function Tabs() {

  const {index, setIndex} = useContext(IndexContext);

  return (
    <div className="flex justify-center p-5">
        <button onClick={() => setIndex('federated_ecomm_PRODUCTS')} className={`mx-5 mb-5 p-3 ${index === 'federated_ecomm_PRODUCTS' ? 'border-b-4' : ''}`}>Products</button>
        <button onClick={() => setIndex('federated_ecomm_ARTICLES')} className={`mx-5 mb-5 p-3 ${index === 'federated_ecomm_ARTICLES' ? 'border-b-4' : ''}`}>Articles</button>
    </div>
  )
}
export default Tabs