// Q# 21 They think of something you could store in a TypeScript Object.

interface items {
    name:string
    price:number
}

// two objects

const vegetable: items = {
    name:"Tomoto",
    price:100
}
const fruite: items ={
    name:"Apple",
    price: 150
}
//Write a program that creates Objects containing these items.


console.log(`Vegetable Name: ${vegetable.name}.\n Vegatable Price: ${vegetable.price}`);
console.log(`Fruite Name: ${fruite.name},\n Fruite Price: ${fruite.price}`)