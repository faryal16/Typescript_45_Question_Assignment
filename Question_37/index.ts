// Q# 37 Large Shirts: Modify the make_shirt() function 

function make_shirt(size : string=/*`"large"*/ "Medium", printMessage:string="I LOVE TYPESCRIPT"){
 console.log(`Creating a ${size} shirt with a ${printMessage} print on shirt.`)
}
//Make a large shirt and a medium shirt with the default message,
make_shirt();

//a medium shirt with the default message,

make_shirt("large");

//a shirt of any size with a different message.
make_shirt("small", "BE POSITIVE");