// Q #38 Cities: Write a function called describe_city()
function describe_city(city, country) {
    if (country === void 0) { country = " PAKISTAN"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
//Call your function for three different cities,
describe_city("KARACHI");
describe_city("ISLAMABAD");
describe_city("LAHORE");
//least one of which is not in the default country.
describe_city("DEHLI", "INDIA");
