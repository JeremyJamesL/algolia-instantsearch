  import ReactStars from 'react-stars'
  import { useLocation } from "react-router-dom";
  import { useRelatedProducts } from '@algolia/recommend-react';
  import recommend from '@algolia/recommend';
  import { Hits } from 'react-instantsearch-hooks-web';
  import { Link } from 'react-router-dom';

  const recommendClient = recommend('YSWWVAX5RB', '9fb3db0222f7b5aef0e2b30791ee6201');
  const indexName = 'federated_ecomm_PRODUCTS';


  // function RelatedItem({ item }) {
  //   return (
  //       <article>
  //           {item.name}
  //           <img src={item.image_urls[0]} />
  //       </article>
  //   );
  // }

  function Product() {
    const location = useLocation();
    const itemID = location.pathname.replace('/', '');
    const hit = location.state;

    const { recommendations } = useRelatedProducts({
      recommendClient,
      indexName,
      objectIDs: [itemID]
    })

    return (
      <main className="container mx-auto pb-10">
        <header className='pt-5 pb-5'>
              <span className='text-xs text-slate-500 uppercase'>
                <Link to="/">
                HOME &#62; 
                </Link> {hit.hierarchical_categories.lvl2}</span>
        </header>
          <article className="flex flex-row">
            <div className="w-2/3 grid grid-cols-2 gap-4">
                  {hit.image_urls.map((img) => {
                    return <img src={img}/>
                  })}
            </div>

            <div className="w-1/3">
              <h1 className='text-xl font-bold'>
                {hit.name}
              </h1>
              <h3>
                <Link to={`/category/${hit.brand}`} state={hit.brand}  >
                  {hit.brand}
                </Link>
              </h3>
              <ReactStars className='mb-3' size={20} count={5} value={hit.reviews.rating} edit={false}/>
              <div className="text-lg mb-2">€{hit.price.value}</div>

              <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque totam enim nostrum doloremque aspernatur ullam repellendus vitae possimus exercitationem ipsam. Ducimus est dolores assumenda quisquam optio praesentium odit distinctio veritatis.</p>
              <p className='mb-4'>Donec semper accumsan diam, ac dictum lectus aliquam eget. Mauris imperdiet pretium mauris id mollis. Morbi quis turpis hendrerit, vulputate nibh ac, viverra risus. Donec bibendum eros arcu, non tristique nibh lacinia ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>

              <label htmlFor="sizes" className="text-md block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a size</label>
              <select id="sizes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {hit.variants.map((variant) => {
                  return <option value={variant.abbreviated_size}>{variant.abbreviated_size}</option>
                })}
              <button className='btn-primary'>Add to cart</button>
              </select>

            </div>

      </article>

      <div className="text-lg font-bold">
        <h2>Similar products</h2>
        {recommendations.length > 0 && (
          <ol className='flex flex-row flex-nowrap overflow-auto'>
            {recommendations.map(r => (
              <li className='flex-none w-60 mr-2' key={r.objectID}>
                  <img src={r.image_urls[0]} className='mb-2' />
                  <Link to={`/${itemID}`} state={r}>
                    <h3 className="text-sm font-bold">{r.name}</h3>
                  </Link>
                  <p className="text-sm font-normal text-slate-500">€{r.price.value}</p>
              </li>
            ))}
          </ol>
        )}
      </div>

      </main>
    )
  }
  export default Product