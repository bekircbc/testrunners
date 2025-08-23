import createCache from '@emotion/cache';

const muiCache = createCache({ key: 'mui', prepend: true });

export default muiCache;
