import metadata from '$lib/data/metadata.json';
import ratedata from '$lib/data/ratedata.json';

export function load() {
    return {
        props: {
            metadata,
            ratedata,
        }
    };
}
