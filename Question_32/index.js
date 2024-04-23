// Q# 32 Checking Usernames: everyone has a unique username.
//Make a list of five or more usernames called current_users.
var current_users = ["Arhama", "Rimsha", "Kulsoom", "Jabeen", "Aysha"];
//array of new users
var new_users = ["Farzana", "Fozia", "Rimsha", "Jabeen", "Aasma"];
//Loop through the new_users list avalaiblity
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, ", is already taken."));
    }
    else {
        console.log("this username ".concat(new_one_user, " is avaliable."));
    }
});
