// Q# 44 Sandwiches: Write a function that accepts a array of items 
//rest pirameter 
function make_sandwiche() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwiche with following items:\n");
    item.forEach(function (singleitem) { return console.log(singleitem); });
    console.log("\nNow enjoy your Order.\nHave a Good Day.\n");
}
//print a summary of the sandwich that is being ordered
//Call the function three times, using a different number of arguments each time.
make_sandwiche("chicken", "cheese", "mayo", "ketch-up", "egg");
make_sandwiche("bread", "butter");
make_sandwiche("chilli sause", "tomoto", "mayo", "chicken", "cucumber");
