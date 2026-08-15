const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true,
}

// let tea: {
//     name: string;
//     price: number;
//     isHot: boolean;
// } = {
//     name: "Masala tea",
//     price: 15,
//     isHot: false,
// }

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"],
}

type Cup = {size: string}
let smallCup: Cup = {size: "200ml"}
let bigCup = {size: "500ml", material: "steel"}

smallCup = bigCup

type Brew = { brewTime: number }
const coffee = { brewTime: 5, beans: "Arabica" }
const chaiBrew: Brew = coffee
