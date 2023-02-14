const sumAll = function(start, end) {
    if (start < 0 || end < 0){
        return "ERROR";
    }
    if (typeof start !== "number" || typeof end !== "number"){
        return "ERROR";
    }
    let lower = start > end ? end : start; 
    let higher = start > end ? start : end;
    return (lower + higher) * (higher - lower + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;

