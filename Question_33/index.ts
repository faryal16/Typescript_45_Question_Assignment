//Q# 33 Ordinal Numbers:indicate their position in a array, such as 1st or 2nd.

//Store the numbers 1 through 9 in a array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Loop through the array.

for(let one_num of numbers){
    let ordinalNumber = "string"
    if(one_num === 1){
        ordinalNumber = "st"
    }else if (one_num === 2){
        ordinalNumber = "nd"
    }else if(one_num === 3){
        ordinalNumber = "rd"
    }else {
        ordinalNumber="th"
    }
    console.log(`${one_num}${ordinalNumber}`)
}