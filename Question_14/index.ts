// Q14:guest list:If you could invite anyone, living or deceased, to dinner, 
//who would you invite?
//Then use your list to print a message to each person, inviting them to dinner.

let guest_list:string[]=["arhama","rimsha","kulsoom","moni"];
 for (let i=0; i<guest_list.length; i++){
     console.log(`dear ${guest_list[i]} ,\n\n "you are invited for a dinner tommorow."\n\n "THANK YOU!"`);
 }
 export{guest_list}