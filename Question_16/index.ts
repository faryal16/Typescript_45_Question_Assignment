//Q16:more guest


let guest_list:string[]=["arhama","rimsha","kulssom","moni"];

//Think of three more guests to invite to dinner.

guest_list.unshift("fahad");
//Add one new guest to the beginning of your array.

guest_list.splice(guest_list.length/2, 2,"jawad");
// Add one new guest to the middle of your array.

guest_list.push("merab");
//Use append() to add one new guest to the end of your list


for (let i=0; i<guest_list.length; i++){
    console.log(`dear ${guest_list[i]}, \n\n"Please have a dinner with us tommorrow.\n\n`);
}
console.log("we have found a bigger dinner table,so we invite more guests.")
