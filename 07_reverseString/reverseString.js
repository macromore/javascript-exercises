const reverseString = function(string) {
    let arr = string.split("");
    arr.reverse();
    let str = "";
    for (let item of arr){
        str += item;
    }
    return str;
};
// Do not edit below this line
module.exports = reverseString;
