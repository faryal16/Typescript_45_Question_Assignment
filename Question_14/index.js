"use strict";
// Q14:guest list:If you could invite anyone, living or deceased, to dinner, 
//who would you invite?
//Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ["arhama", "rimsha", "kulsoom", "moni"];
exports.guest_list = guest_list;
for (var i = 0; i < guest_list.length; i++) {
    console.log("dear ".concat(guest_list[i], " ,\n\n \"you are invited for a dinner tommorow.\"\n\n \"THANK YOU!\""));
}
