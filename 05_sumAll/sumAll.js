const sumAll = function (x, y) {
    sum = 0;
    if (x < 0 || y < 0) {
        return "ERROR"
    }

    else if(typeof x !== "number" || typeof y !== "number"){
        return "ERROR"
    }

    else if (x < y) {

        for (let i = x; i <= y; i++) {
            sum += i
        }
        return sum
    }
    else if (x > y) {
        for (let i = y; i <= x; i++) {
            sum += i
        }
        return sum
    }


};

// Do not edit below this line
module.exports = sumAll;
