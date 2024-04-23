// Q#43 Unchanged Magicians:
//Call the function make_great() with a copy of the array of magicians’ names. 
function show_magicians(Magicians:string[]){
    Magicians.forEach(name => console.log(name))
}
 
//Write a function called make_great()
function make_great(Magicians:string[]){
 return Magicians.map(name => `The great ${name}.`)
}

//define array
let Magicians_name =["harry poter", "hamza","bilal"]

// making a copy of original array through.slice( function)
let copy_Magicians_name = Magicians_name.slice()


//modify the copiedarray to includes "THe Great" with their names
let copy_great_magicians=make_great(copy_Magicians_name)

//show original array 
console.log("original array:\n")
show_magicians(Magicians_name)
//shoe copy array
console.log("\ncopied array:\n")
show_magicians(copy_great_magicians)