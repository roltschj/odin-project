const removeFromArray = function(array, ...args) {

    array = array.filter((num) => !args.includes(num));

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
