//Q# 39 City Names: Write a function called city_country()

function city_country(city:string , country:string) : string{
 return `${city},${country}`;
}
//print the value that’s returned.
city_country("KARACHI","PAKISTAN")
console.log(city_country("KARACHI","PAKISTAN"));

city_country("TOKOYO", "JAPAN");
console.log(city_country("TOKOYO", "JAPAN"))

city_country("ISTANBUL", "TURKEY");
console.log( city_country("ISTANBUL", "TURKEY") )