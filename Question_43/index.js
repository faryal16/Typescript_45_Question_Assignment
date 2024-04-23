// Q#43 Unchanged Magicians:
//Call the function make_great() with a copy of the array of magicians’ names. 
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
//Write a function called make_great()
function make_great(Magicians) {
    return Magicians.map(function (name) { return "The great ".concat(name, "."); });
}
//define array
var Magicians_name = ["harry poter", "hamza", "bilal"];
// making a copy of original array through.slice( function)
var copy_Magicians_name = Magicians_name.slice();
//modify the copiedarray to includes "THe Great" with their names
var copy_great_magicians = make_great(copy_Magicians_name);
//show original array 
console.log("original array:\n");
show_magicians(Magicians_name);
//shoe copy array
console.log("\ncopied array:\n");
show_magicians(copy_great_magicians);
