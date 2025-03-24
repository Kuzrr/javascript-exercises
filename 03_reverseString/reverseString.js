const reverseString = function(text) {
    let reverse = '';
    for(let i = 1; i<= text.length; i++){
        let currentLastLetter = text.charAt(text.length - i);
        reverse = reverse + currentLastLetter;
    }

    return reverse;
};

console.log(reverseString("Hello World"))

// Do not edit below this line
module.exports = reverseString;
``