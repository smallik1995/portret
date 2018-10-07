window.sortABC = function (arr, props) {
    return arr.sort( function (a,b) {
        if( a[props] < b[props] ) {
            return -1;
        } else {
            return 1;
        }
    });
};