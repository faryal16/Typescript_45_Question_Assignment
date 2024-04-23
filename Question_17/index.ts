//Q16:more guest


let guest_list:string[]=["arhama","rimsha","kulssom","moni"];

//Think of three more guests to invite to dinner.

guest_list.unshift("fahad");
//Add one new guest to the beginning of your array.

guest_list.splice(guest_list.length/2, 2,"jawad");
// Add one new guest to the middle of your array.

guest_list.push("merab");
//Use append() to add one new guest to the end of your list


//for (let i=0; i<guest_list.length; i++){
  //  console.log(`dear ${guest_list[i]}, \n\n"Please have a dinner with us tommorrow.\n\n`);
//}
//console.log("we have found a bigger dinner table,so we invite more guests.")


// Q#17 Shrinking Guest List:

//prints a message saying that you can invite only two people for dinner.

// for (let i=0; i<guest_list.length; i++){
console.log("\n UNfortunately, we cannot arrange big table , only two people allow.\n")
// }
while(guest_list.length >2){
    let remove_guest =guest_list.pop();

console.log(`Sorry Dear ${remove_guest},\n Due to emergency, we are cancelling dinner table.\n`)
}

//Print a message to each of the two people still on your list

 for (let i=0; i<guest_list.length; i++){

   console.log(`Dear ${guest_list[i]},\n you are still invited for dinner\n "Thank You\n`)
 }
 //Remove the last two names from your list,

 guest_list.splice(0,2)
 console.log(guest_list)