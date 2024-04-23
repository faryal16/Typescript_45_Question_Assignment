// Q#45  Cars: Write a function that stores information about a car in a Object.

function creat_car(manufacturer, modal, ...options){
    //initialize car manufacture and modal
    let car={
        manufacturer: manufacturer ,
        modal: modal
    };

    //add additional option for car
    options.forEach(option => {
        let [key , value] = option.split(":");
        car[key.trim()] = value.trim()
    });
    return car
}
//call a function to creat object
let my_car = creat_car("ToYOTA", "Corrolla", "color:Black", "sunroof:true", "year:2024")

//print the variable to ensure that info is correctly store.
console.log(my_car)