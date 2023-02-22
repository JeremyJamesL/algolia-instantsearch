import { useContext } from 'react';
import { SortBy } from 'react-instantsearch-hooks-web';
import { IndexContext } from '../App';

function Sorts() {
    const {index, setIndex} = useContext(IndexContext)

    return (
        <>
        <SortBy 
        onChangeCapture={ (e) => setIndex(e.target.value) }
        items={[
            { label: 'Default', value: 'federated_ecomm_PRODUCTS'},
            { label: 'Number of reviews (high > low)', value: 'federated_ecomm_PRODUCTS_numreviews_desc'}
        ]}
        />
        </>
    )
}
export default Sorts