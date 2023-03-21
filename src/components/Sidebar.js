import { useContext } from 'react';
import { HierarchicalMenu, RefinementList } from 'react-instantsearch-hooks-web';
import Geoloc from './Geoloc';
import { IndexContext } from '../index';
import Sorts from './Sorts';


function Sidebar(props) {

  const index = props.activeIndex;

  return (
    <aside className="col-span-1">

      <Sorts activeIndex={index} setIndex={props.setIndex}/>
      
      {index.includes('federated_ecomm_PRODUCTS') && 
      <>
      <Geoloc userIP={props.activeUser} updateUserIP={props.setIP} />
      <div className="mb-5">
        <h3 className='mb-2'>Brand</h3>
        <RefinementList
          attribute="brand"
          /> 
      </div>

      <div className="mb-5">
      <h3 className='mb-2'>Category</h3>
        <HierarchicalMenu
            attributes={[
              'hierarchical_categories.lvl0',
              'hierarchical_categories.lvl1',
              'hierarchical_categories.lvl2',
            ]}
            />
      </div>
      </>
      }



    </aside>
  )
}
export default Sidebar