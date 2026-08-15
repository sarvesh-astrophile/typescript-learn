function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai('black', 4);

function getChaiPrice(): number {
    return 25
}

function makeOrder(order: string): string | null {
    if (!order) return null
    return `Order received: ${order}`
}

function orderChai(type: string = "Masala") {
    console.log(`Ordering ${type} chai`)
}

function createChai(order: { type: string; sugar: number; size: "small" | "medium" | "large" }): number {
  return 4
}
