// Q#45  Cars: Write a function that stores information about a car in a Object.
function creat_car(manufacturer, modal) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize car manufacture and modal
    var car = {
        manufacturer: manufacturer,
        modal: modal
    };
    //add additional option for car
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call a function to creat object
var my_car = creat_car("ToYOTA", "Corrolla", "color:Black", "sunroof:true", "year:2024");
//print the variable to ensure that info is correctly store.
console.log(my_car);
