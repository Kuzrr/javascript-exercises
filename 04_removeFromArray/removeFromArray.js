const removeFromArray = function() {
    let array = arguments[0];
    for (let i = 1; i <= arguments.length - 1; i++) {
        let toRemove = arguments[i];
        let indexToRemove = array.indexOf(toRemove);
        while(indexToRemove !== -1){
            array.splice(indexToRemove, 1);
            indexToRemove = array.indexOf(toRemove);
        }
    }
    return array;
};

 console.log(removeFromArray([5, 1, 2, 5, 3, 11], 5));


// Do not edit below this line
module.exports = removeFromArray;
