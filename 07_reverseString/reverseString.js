const reverseString = function(string) {
    rev = ''
    for (i=0; i< string.length; i++) {
        rev = string[i] + rev
    }
    return rev
};

// Do not edit below this line
module.exports = reverseString;
