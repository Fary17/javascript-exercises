const repeatString = function(string, number) {
    let result = '';
    i = 0;
    while (i < number) {
        result += string;
        i++;
    }
    return result;
};

console.log(repeatString('hey', 3)); // heyheyhey

// Do not edit below this line
module.exports = repeatString;
