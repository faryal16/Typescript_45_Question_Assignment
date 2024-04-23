// Q# 44 Sandwiches: Write a function that accepts a array of items 
//rest pirameter 
function make_sandwiche(...item:string []){
    console.log("\nMaking a Sandwiche with following items:\n")

    item.forEach(singleitem => console.log(singleitem))

    console.log("\nNow enjoy your Order.\nHave a Good Day.\n")
}


//Call the function three times, using a different number of arguments each time.
make_sandwiche("chicken", "cheese","mayo","ketch-up","egg");

make_sandwiche("bread" ,"butter" );

make_sandwiche("chilli sause","tomoto","mayo", "chicken","cucumber")