//Q# 33 Ordinal Numbers:indicate their position in a array, such as 1st or 2nd.
//Store the numbers 1 through 9 in a array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Loop through the array.
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var one_num = numbers_1[_i];
    var ordinalNumber = "string";
    if (one_num === 1) {
        ordinalNumber = "st";
    }
    else if (one_num === 2) {
        ordinalNumber = "nd";
    }
    else if (one_num === 3) {
        ordinalNumber = "rd";
    }
    else {
        ordinalNumber = "th";
    }
    console.log("".concat(one_num).concat(ordinalNumber));
}
