// Q# 42 Great Magicians:
//define Q #41
function show_magicians(Magicians:string[]){
    Magicians.forEach(name => console.log(name))
}
 
//Write a function called make_great()
function make_great(Magicians:string[]){
 return Magicians.map(name => `The great ${name}.`)
}

//define array
let MagiciansName =["harry poter", "hamza","bilal"]


//Call show_magicians() to see that the list has actually been modified.
let great_magicians =make_great(MagiciansName)
// console.log(great_magicians)

show_magicians(great_magicians)