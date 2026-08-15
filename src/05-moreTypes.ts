let response: any = "42"

let numeric: number = (response as string).length

type Book = {
    name: string
}

let bookString = '{"name": "who moved my cheese"}'
let bookObject = JSON.parse(bookString)
console.log(bookObject.name)

const inputElement = document.getElementById("username") as HTMLInputElement
inputElement.value = ""

let value: any
value = "chai"
value = [1, 2, 3]
value = "2.5"
value.toUpperCase()

let newValue: unknown
newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5
if (typeof newValue === "string") {
    console.log(newValue.toUpperCase())
} else if (typeof newValue === "number") {
    console.log(newValue.toFixed(2))
}


try {
    (newValue as string).toUpperCase()
} catch (error) {
    if (error instanceof Error) {
        console.error("newValue is not a string", error.message)
    } else {
        throw error
    }
}

const data: unknown = "chai aur code"
const strData: string = data as string

type Role = "admin" | "user" | "guest" | "superadmin"
function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("redirecting to admin")
    }
    else if (role === "user") {
        console.log("redirecting to user")
    }
    else if (role === "guest") {
        console.log("redirecting to guest")
    }

    if (role) 
}
