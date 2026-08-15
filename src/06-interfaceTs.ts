type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder) {
    console.log(order)
}

function serveChai(order: ChaiOrder) {
    console.log(order)
}

type TeaRecipe = {
    water: number;
    milk: number;
}

class MasalChai implements TeaRecipe {
    water = 0;
    milk = 0;

}

interface CupSize {
    size: 'small' | 'medium' | 'large';
}

class ChaiCup implements CupSize {
    size: 'small' | 'medium' | 'large';

    constructor(size: 'small' | 'medium' | 'large') {
        this.size = size;
    }

}

interface Response {
    ok: true | false;
}

class myRes implements Response {
    ok: true | false;

    constructor(ok: true | false) {
        this.ok = ok;
    }

}

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType) {
    console.log(t)
}

type BaseChai = { teaLeaves: number; }
type Extra = { masala: number; }

type MasalChaiExtra = BaseChai & Extra;

const cup: MasalChaiExtra = { teaLeaves: 2, masala: 1 };

type User = {
    user: string;
    bio?: string;
}

const u1: User = { user: "Sarvesh" };
const u2: User = { user: "Sarvesh", bio: "I am a software engineer" }

type Config = {
    readonly appName: string;
    version: number;
}

const cfg: Config = { appName: "My App", version: 1 };

// cfg.appName = "New App";
