const repeatString = function(text, repeat) {
    let result = ''
    if (repeat < 0) {
        return "ERROR"
    }
    for (let i = 0; i < repeat ; i++){
        result = result + text;
    }
    return result;
};


// Do not edit below this line
module.exports = repeatString;
