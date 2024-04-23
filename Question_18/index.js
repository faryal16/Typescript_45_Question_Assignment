// Q#18 Seeing the World: Think of at least five places in the world .
// Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Print your array in its original order.
var places = ["saudia arab", "turkey", "iran", "paris", "japan"];
console.log("orginal:" + places);
//Print your array in alphabetical order without modifying the actual list.
console.log("\ncopy:" + __spreadArray([], places, true).sort());
//• Show that your array is still in its original order by printing it.
console.log("\norignal:" + places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\ncopy:" + __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("\ncopy:" + __spreadArray([], places, true).sort().reverse());
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("\norginal:" + places.sort());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\norginal:" + places.sort().reverse());
//Sort your array so it’s stored in alphabetical order. 
console.log("\ncopy:" + __spreadArray([], places, true).sort());
//Sort to change your array so it’s stored in reverse alphabetical order.
console.log("\ncopy:" + __spreadArray([], places, true).sort().reverse());
