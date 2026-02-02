const sumAll = function(x, y) {
    allNums = 0
    if (x < 0 || y < 0) { 
        return 'ERROR';
    } else if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return 'ERROR';
    } else if (x < y) {
        for (i=x; i<=y; i++){
            allNums += i;
        }
    } else if (y < x) {
        for (i=y; i<=x; i++){
            allNums +=i;
        }
    }
    return allNums;
};

// Do not edit below this line
module.exports = sumAll;
