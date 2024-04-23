//Q# 35 Animals: Think of at least three different animals that have a common characteristic.

let pet_animals =["cat" , "dog", "goat"]

//use a for loop to print out the name of each animal. 
for(let oneAnimal of pet_animals){
 console.log(`A ${oneAnimal} is a great pet.\nkids like it a lot.`)
}
// print a message outside of loop
console.log(`Any of these animals would make a great pet!`)