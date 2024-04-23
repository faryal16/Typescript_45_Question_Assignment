// Q# 32 Checking Usernames: everyone has a unique username.

//Make a list of five or more usernames called current_users.
let current_users = ["Arhama", "Rimsha","Kulsoom","Jabeen" ,"Aysha"]

//array of new users
let new_users = ["Farzana" ,"Fozia","Rimsha","Jabeen", "Aasma"]

//Loop through the new_users list avalaiblity
new_users.forEach(new_one_user =>{
let our_condition=current_users.some(current_one_users => current_one_users.toLowerCase()===new_one_user.toLowerCase() 
); 
// Make sure your comparison is case insensitive. 
if (our_condition){
   console.log(`Sorry ${new_one_user}, is already taken.`)
} 
//print a message saying that the username is available.
else{
    console.log(`this username ${new_one_user} is avaliable.`)
}

})