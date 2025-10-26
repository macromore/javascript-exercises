const removeFromArray = function(arr, ... item) {
    for (let thing of item) {
        for (let i = 0; i < arr.length; ) {
            if (arr[i] === thing) {
                arr.splice(i, 1);
            } else {
                i++;
            };
        };
    };
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
