// Q# 27 Alien Colors #3: Turn your if-else chain .

    // Version 1 (if work)
    let alien_color ="Green";

//If the alien is green, print a message that the player earned 5 points.
if(alien_color === "Green"){
    console.log("(version 1):\nyou shot down a Green alien , you got 5 points.");
}
//If the alien is yellow, print a message that the player earned 10 points.
else if(alien_color === "yellow"){
    console.log(" oh wow you earned 10 points.");
}

//If the alien is red, print a message that the player earned 15 points.
else{
    console.log("Congrates, you have earned 15 points.");
}
        // version 2 (else if)

        let alien_color2 = "yellow";

//If the alien is green, print a message that the player earned 5 points.
if(alien_color2 === "Green"){
    console.log("you shot down a Green alien , you got 5 points.");
}
//If the alien is yellow, print a message that the player earned 10 points.
else if(alien_color2 === "yellow"){
    console.log("(version 2):\nyou shot down yellow one, so you earned 10 points.");
}

//If the alien is red, print a message that the player earned 15 points.
else{
    console.log("Congrates, you have earned 15 points.");
}  

            //version 3
let alien_color3 = "red"
//If the alien is green, print a message that the player earned 5 points.
if(alien_color3 === "Green"){
    console.log("you shot down a Green alien , you got 5 points.");
}
//If the alien is yellow, print a message that the player earned 10 points.
else if(alien_color3 === "yellow"){
    console.log(" oh wow you earned 10 points.");
}

//If the alien is red, print a message that the player earned 15 points.
else{
    console.log("(version 3):\n Congrates ,you select red ,so you have earned 15 points.");
} 