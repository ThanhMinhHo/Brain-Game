/*
This is a utility function to tell if a given parameter is a String or not.
Returns: true/false */
window.isString = function (s) {
    return typeof (s) === 'string' || s instanceof String;
}

// get a random item from a list
window.randomNumber = function (maxNumber) {
    //call the Math.random that generate the value from 0.0000 to 0.99999999999
    //It then * list.length to generate randomly the result from 0 to max number
    var randomNumber = Math.floor(Math.random() * maxNumber);
    return randomNumber;
}
