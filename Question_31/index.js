// Q# 31 No Users: 
//array from Question #30
var user = ["Junaid", "Faryal", "Admin", "Rabia", "Fatima"];
// empty array
user = [];
//If the list is empty, print the message We need to find some users!
if (user.length === 0) {
    console.log(" your array is empty,We need to find some users!");
}
else {
    user.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        //Hello admin, would you like to see a status report?
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
//Remove all of the usernames from your array, and make sure the correct message is printed.
