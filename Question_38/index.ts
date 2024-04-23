// Q #38 Cities: Write a function called describe_city()

function describe_city(city:string , country:string= " PAKISTAN")//country a default value.
{
  console.log(`${city} is in ${country}.`)
}
//Call your function for three different cities,
describe_city("KARACHI")
describe_city("ISLAMABAD")
describe_city("LAHORE")

//least one of which is not in the default country.
describe_city("DEHLI" , "INDIA")