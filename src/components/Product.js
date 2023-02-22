import { useLocation } from "react-router-dom";
import { FrequentlyBoughtTogether } from '@algolia/recommend-react';
import recommend from '@algolia/recommend';

const recommendClient = recommend('YSWWVAX5RB', '9fb3db0222f7b5aef0e2b30791ee6201');
const indexName = 'federated_ecomm_PRODUCTS';


function RelatedItem({ item }) {
  return (
      <article>
          {item.name}
          <img src={item.image_urls[0]} />
      </article>
  );
}



function Product() {
  const location = useLocation();
  const itemID = location.pathname.replace('/', '');
  const hit = location.state;


  return (
    <div>

      <article>
          {hit.name}
          <img src={hit.image_urls[0]} alt={hit.name}/>
      </article>

      <FrequentlyBoughtTogether
        recommendClient={recommendClient}
        indexName={indexName}
        objectIDs={[itemID]}
        itemComponent={RelatedItem}
    />
    </div>
  )
}
export default Product