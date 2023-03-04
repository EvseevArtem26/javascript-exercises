const palindromes = function (string) {
    const regex = RegExp("[^a-z]", "g");
    const preparedString = string.toLowerCase().replaceAll(regex, "");
    return preparedString.split("").reverse().join("") === preparedString;
};

// Do not edit below this line
module.exports = palindromes;
