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
    <span>
        {nbHits} results processed in 0.0{processingTimeMS}s
    </span>

  );
}