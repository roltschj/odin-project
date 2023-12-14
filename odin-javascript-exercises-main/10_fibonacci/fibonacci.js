const fibonacci = function(num) {
    // I'm cheating here by using Binet's Formula :D
    // https://artofproblemsolving.com/wiki/index.php/Binet%27s_Formula
    const n = parseInt(num);
    const rootFive = Math.sqrt(5);

    if ( n < 0 ) {
        return "OOPS";
    }

    return Math.floor(((( 1 + rootFive) / 2 ) ** n - (( 1 - rootFive) / 2 ) ** n ) / rootFive);
};

// Do not edit below this line
module.exports = fibonacci;