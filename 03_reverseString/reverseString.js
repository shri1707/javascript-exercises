const reverseString = function(strings) {
    let a= strings
    let str=""
    for (let i=1; i<=a.length;i++){
        str += a[a.length-i]
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
