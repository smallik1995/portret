export default function dateFilter(value) {
    if ( typeof value === 'string') {
        return value.split('-').reverse().join('.');
    }
}