function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`
    } else {
        return `Chai order: ${kind}`
    }
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === 'small') {
      return `small cutting chai`
    } else if (size === 'medium') {
      return `medium cutting chai`
    } else if (size === 'large') {
      return `large cutting chai`
    } else {
      return `custom size chai`
    }
}

class KulhadChai {
    serve() {
        return `serving Kulhad Chai`
    }
}

class CuttingChai {
    serve() {
        return `serving Cutting Chai`
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve()
    } else {
        return chai.serve()
    }
}

const chai = new KulhadChai()
console.log(serve(chai))

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        obj == "object" &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serveOrder(order: ChaiOrder | string) {
    if (isChaiOrder(order)) {
        return `serving ${order.type} chai with ${order.sugar} sugar`
    } else {
        return order
    }
}

type MasalChai = { type: "masala";  spicelevel: number}
type GingerChai = { type: "ginger";  amount: number}
type ElaichiChai = { type: "elaichi";  aroma: number}

type Chai = MasalChai | GingerChai | ElaichiChai

function MakeChai(order: Chai) {
    switch (order.type) {
        case 'masala':
            return `making masala chai with spice level ${order.spicelevel}`
        case 'ginger':
            return `making ginger chai with amount ${order.amount}`
        case 'elaichi':
            return `making elaichi chai with aroma ${order.aroma}`
    }
}

function brew(order: MasalChai | GingerChai ) {
    if ("spicelevel" in order) {
        return `making masala chai with spice level ${order.spicelevel}`
    } else if ("amount" in order) {
        return `making ginger chai with amount ${order.amount}`
    }
}

function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr)
}