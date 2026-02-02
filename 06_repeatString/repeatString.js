const repeatString = function(string, num) {
    if (num < 0){
        return 'ERROR';
    } else {
        repStr = ''
        for (i=0; i < num; i++){
            repStr += string
        }
        return repStr
    }
    
};

// Do not edit below this line
module.exports = repeatString;
