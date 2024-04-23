// Q15:changing guest list:
//You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.

let guest_list:string[]=["arhama","rimsha","kulssom","moni"];
let unabletoattend:string="arhama";
let new_guest:string="daniyal";
guest_list[0]=new_guest;

 for (let i=0; i<guest_list.length; i++){

    console.log(`dear ${guest_list[i]}, \n\n "Please join me for a dinner tommorow."\n\n "THANK YOU!"\n\n`);
 }

console.log(`miss ${unabletoattend}, is not coming for dinner.`);
