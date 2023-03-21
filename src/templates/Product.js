import { Link } from "react-router-dom";
import { useState } from 'react';

function Product({hit, sendEvent}) {
  const [isShown, setIsShown] = useState(false);

  return (
    <article className="card" key={hit.objectID}>
                {/* <img src={hit.image_urls[0]} alt={hit.name} className="object-cover w-full h-fit mb-3"/> */}
                <img src={!isShown ? hit.image_urls[0] : hit.image_urls[1]} alt={hit.name} className="object-cover w-full h-fit mb-3"
                onMouseEnter={()  => setIsShown(true)}
                onMouseLeave={()  => setIsShown(false)}
                />
                <div>
                    <h5 className="font-bold text-base">
                    <Link to={`/${hit.objectID}`} state={hit} onClick={() => {
                      sendEvent('click', hit, 'Product Clicked');
                    }}>
                      {hit.name}
                    </Link>
                    </h5>
                    <p className="text-sm text-slate-500 mb-3">
                      {hit.brand}
                    </p>
                    <p className="mb-2">
                    €{hit.price.value}<br/>
                    {hit.reviews.count}
                    </p>

                    <button className="btn-primary w-full" onClick={() => {
                      sendEvent('conversion', hit, 'Add to cart')
                    }}>
                        Add to cart
                    </button>
                </div>
              </article>
  )
}
export default Product