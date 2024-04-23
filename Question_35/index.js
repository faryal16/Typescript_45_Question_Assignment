//Q# 35 Animals: Think of at least three different animals that have a common characteristic.
var pet_animals = ["cat", "dog", "goat"];
//use a for loop to print out the name of each animal. 
for (var _i = 0, pet_animals_1 = pet_animals; _i < pet_animals_1.length; _i++) {
    var oneAnimal = pet_animals_1[_i];
    console.log("A ".concat(oneAnimal, " is a great pet.\nkids like it a lot."));
}
// print a message outside of loop
console.log("Any of these animals would make a great pet!");
