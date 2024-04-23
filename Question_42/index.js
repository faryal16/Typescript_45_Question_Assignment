// Q# 42 Great Magicians:
//define Q #41
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
//Write a function called make_great()
function make_great(Magicians) {
    return Magicians.map(function (name) { return "The great ".concat(name, "."); });
}
//define array
var MagiciansName = ["harry poter", "hamza", "bilal"];
//Call show_magicians() to see that the list has actually been modified.
var great_magicians = make_great(MagiciansName);
// console.log(great_magicians)
show_magicians(great_magicians);
