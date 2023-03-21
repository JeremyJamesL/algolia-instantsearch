import { useContext } from "react"
import { IndexContext } from "../index"

function Tabs(props) {

  return (
    <div className="flex justify-center p-5">
        <button onClick={() => props.setIndex('federated_ecomm_PRODUCTS')} className={`mx-5 mb-5 p-3 ${props.activeIndex.includes('federated_ecomm_PRODUCTS') ? 'border-b-4' : ''}`}>Products</button>
        <button onClick={() => props.setIndex('federated_ecomm_ARTICLES')} className={`mx-5 mb-5 p-3 ${props.activeIndex.includes('federated_ecomm_ARTICLES') ? 'border-b-4' : ''}`}>Articles</button>
    </div>
  )
}
export default Tabs