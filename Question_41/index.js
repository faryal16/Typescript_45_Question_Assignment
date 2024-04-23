// Q# 41 Magicians: Make a array of magician’s names.
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//define the array
var Magicians_name = ["harry poter", "amal bangali", "john racky"];
//prints the name of each magician in the array.
show_magicians(Magicians_name);
