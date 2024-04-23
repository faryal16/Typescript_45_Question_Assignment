// Q# 30 
//Hello Admin: Make a array of five or more usernames, including the name 'admin'.

let user:string []=["Junaid", "Faryal", "Admin", "Rabia", "Fatima"]

//If the username is 'admin', print a special greeting, 
user.forEach(oneUser => {
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }
    //Hello admin, would you like to see a status report?
    else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
