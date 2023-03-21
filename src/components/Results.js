import { InfiniteHits } from "react-instantsearch-hooks-web";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";
import './Results.css';
import { useQueryRules } from 'react-instantsearch-hooks-web';
import Product from "../templates/Product";
import Article from "../templates/Article"

const renderPromo = (promo) => {
  if(promo.length > 0) {
    return <div className="btn-primary text-center"><a href={promo[0].promo_url}>{promo[0].promo_content}</a></div>
  } 
}

function Results(props) {

  const index = props.activeIndex;
  const {items} = useQueryRules();

  return (
    <section className="results col-span-3">
      {renderPromo(items)}
      <Tabs setIndex={props.setIndex} activeIndex={index}/>
      {index.includes('federated_ecomm_PRODUCTS')  &&
        <InfiniteHits
            showPrevious={false}
            classNames={{
                list: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4',
                item: 'jl-hit',
                loadMore: 'border-solid border-1 border-black bg-black text-white text-sm p-3'
            }}
            hitComponent={Product}/>
            }

      {index === 'federated_ecomm_ARTICLES' && 
           <InfiniteHits
            showPrevious={false}
            classNames={{
                list: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4',
                item: 'jl-hit',
                loadMore: 'border-solid border-1 border-black bg-black text-white text-sm p-3'
            }}
            hitComponent={Article}
            />
          }
    </section>
  )
}
export default Results