const removeFromArray = function(array, ...targets) {
    return array.filter(el => !targets.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
