const chaiFlavours: string[] = ["Masala", "Chamomile", "Rose"]
const chaiPrice: number[] = [4, 5, 6]

const rating: Array<number> = [4, 5, 6]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    { name: "Masala", price: 4 },
    { name: "Chamomile", price: 5 },
    { name: "Rose", price: 6 }
]

menu.push({ name: "", price:  })

const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"]
cities.push("Chennai")

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
table.push([10, 11, 12])

let chaiTuple: [string, number];
chaiTuple = ["Masala", 4]
// chaiTuple = [20, "masala"]
chaiTuple.push("masala", 4)

let userInfo: [string, number, boolean?]
userInfo = ["John", 25]
userInfo = ["John", 25, true]

const location: readonly [number, number] = [10, 20]

const chaiItems: [name: string, price: number] = ["Masala", 4]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE,
}
const cupSize: CupSize = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVERD,
    COMPLETED,
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai(type: ChaiType): string {
    console.log(`Making ${type} chai`)
    return `Making ${type} chai`
}

makeChai(ChaiType.GINGER)

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
}

let t: [string, number] = ["chai", 10]
t.push("extra")
