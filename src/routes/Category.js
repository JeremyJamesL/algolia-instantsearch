import { useLocation } from "react-router-dom";
import { Configure } from "react-instantsearch-hooks-web";
import { InfiniteHits } from "react-instantsearch-hooks-web";
import { useEffect } from "react";
import Product from "../templates/Product";
import {
    useInstantSearch,
    Hits
  } from 'react-instantsearch-hooks-web';

function Category() {
    const location = useLocation();
    const brand = location.pathname.split('/')
    const filter = brand[2];


  return (
    <div>
      <h2 className="text-xl font-bold mb-3">
        {filter}
      </h2>
      <Configure
      filters={`"brand": ${filter}`} 
      /> 
       <InfiniteHits
            showPrevious={false}
            classNames={{
                list: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4',
                item: 'jl-hit',
                loadMore: 'border-solid border-1 border-black bg-black text-white text-sm p-3'
            }}
            hitComponent={Product}/>
    </div>
  )
}
export default Category