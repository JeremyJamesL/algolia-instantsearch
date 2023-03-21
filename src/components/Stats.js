import { useConnector } from 'react-instantsearch-hooks-web';
import connectStats from 'instantsearch.js/es/connectors/stats/connectStats';

export function useStats(props) {
  return useConnector(connectStats, props);
}

export function Stats(props) {
  const {
    nbHits,
    processingTimeMS
  } = useStats(props);

  return (
    <span className='mr-3'>
        <span className='font-semibold'>{nbHits}</span> results processed in <span className='font-semibold'>0.0{processingTimeMS}s</span>
    </span>

  );
}