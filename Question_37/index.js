// Q# 37 Large Shirts: Modify the make_shirt() function 
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Medium"; }
    if (printMessage === void 0) { printMessage = "I LOVE TYPESCRIPT"; }
    console.log("Creating a ".concat(size, " shirt with a ").concat(printMessage, " print on shirt."));
}
//Make a large shirt and a medium shirt with the default message,
make_shirt();
//a medium shirt with the default message,
make_shirt("large");
//a shirt of any size with a different message.
make_shirt("small", "BE POSITIVE");
