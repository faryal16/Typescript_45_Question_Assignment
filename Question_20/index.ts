// Q#  Think of something you could store in a array.

let language_list:string[] = ['Urdu' ,'English' , 'French' , 'Arabic' , 'chiness' , 'Hindhi']


//Write a program that creates a list containing these items.

console.log("\n list of langauges")
for(let i=0; i<language_list.length ; i++){
    console.log(` ${language_list[i]}`)
}