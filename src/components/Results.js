import { InfiniteHits } from "react-instantsearch-hooks-web";
import { Link } from "react-router-dom";
import Tabs from "./Tabs";
import './Results.css';
import { IndexContext } from "../App";
import { useContext } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

function Results() {

  const {index} = useContext(IndexContext);

  return (
    <section className="results col-span-3">
      <Tabs/>
      {index.includes('federated_ecomm_PRODUCTS')  &&
        <InfiniteHits
            showPrevious={false}
            classNames={{
                list: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4',
                item: 'jl-hit',
                loadMore: 'border-solid border-1 border-black bg-black text-white text-sm p-3'
            }}
            hitComponent={({hit, sendEvent}) =>
              <article className="card">
                <img src={hit.image_urls[0]} alt={hit.name} className="object-cover w-full h-fit mb-3"/>
                <div>
                    <h5 className="font-bold text-base">
                    <Link to={`/${hit.objectID}`} state={hit} onClick={() => {
                      sendEvent('click', hit, 'Product Clicked');
                    }}>
                      {hit.name}
                    </Link>
                    </h5>
                    <p className="text-sm text-slate-500">
                      {hit.brand}
                    </p>
                    <p>
                    €{hit.price.value}
                    </p>
                    <div className="">
                    <button className="btn-primary" onClick={() => {
                      sendEvent('conversion', hit, 'Add to cart')
                    }}>
                        Add to cart
                    </button>
                    </div>
                </div>
              </article>
            }
        />
        }

      {index === 'federated_ecomm_ARTICLES' && 

           <InfiniteHits
            showPrevious={false}
            classNames={{
                list: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4',
                item: 'jl-hit',
                loadMore: 'border-solid border-1 border-black bg-black text-white text-sm p-3'
            }}
            hitComponent={({hit, sendEvent}) =>
              <article className="card">
                <img src={hit.image_url} alt={hit.name} className="object-cover w-full h-fit mb-3"/>
                <div>
                    <h5 className="font-bold text-base mb-2">
                    <Link to={`/article/${hit.objectID}`} onClick={() => {
                      sendEvent('click', hit, 'Article Clicked');
                    }}>
                      {hit.title}
                    </Link>
                    </h5>
                    <div className="flex ">
                    <FaRegThumbsUp className="mr-2" onClick={() => sendEvent('conversion', hit, 'Add to cart')} />
                    <FaRegThumbsDown />
                    </div>
                </div>
              </article>
            }
            />
          }
    </section>
  )
}
export default Results