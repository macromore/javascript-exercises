const repeatString = function(string, num) {
    if (num >= 0) {
        let repstring = "";
        for (let i = 0; i < num; i++) {
            repstring += string;
        }
        return repstring;
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
