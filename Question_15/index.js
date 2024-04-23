// Q15:changing guest list:
//You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.
var guest_list = ["arhama", "rimsha", "kulssom", "moni"];
var unabletoattend = "arhama";
var new_guest = "daniyal";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("dear ".concat(guest_list[i], ", \n\n \"Please join me for a dinner tommorow.\"\n\n \"THANK YOU!\"\n\n"));
}
console.log("miss ".concat(unabletoattend, ", is not coming for dinner."));
