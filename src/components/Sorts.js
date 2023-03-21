import { SortBy } from 'react-instantsearch-hooks-web';

function Sorts(props) {

    const index = props.activeIndex;

    const onChangeCaptureHandler  = (e) => {
        props.setIndex(e.target.value)
    }
    return (
        <div className="mb-3">
        <SortBy 
        onChangeCapture={onChangeCaptureHandler}
        items={[
            { label: 'Most relevant', value: 'federated_ecomm_PRODUCTS'},
            { label: 'Number of reviews (high > low)', value: 'federated_ecomm_PRODUCTS_numreviews_desc'},
            { label: 'Number of reviews (low > high)', value: 'federated_ecomm_PRODUCTS_numreviews_asc'}
        ]}
        />
        
        </div>
        
    )
}
export default Sorts