// Object
let car = {
    name: "Fiat",
    model: 500,
    weight: 850,
    color: "while",
    start: function() {
        console.log(this.name + " Start Running");

    }
}

console.log("----------------------------------------")

//loop all properties anh method in Object car
for (let variable in car) {
    console.log("variable: ", variable, typeof(variable))
    console.log("value: ", car[variable], typeof(car[variable]))
}
console.log("----------------------------------------")

//lop all value in object car
let cars = [{ name: "Fiat" }, { name: "Honda" }]
for (let variable of cars) {
    console.log("Variable: ", variable)
}

console.log("Car ", car.name, "Running: ")
car.start()

//function object
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
var myCar = new Car("egle", "Talon", 1993)
console.log("myCar", myCar)
console.log("----------------------------------------")

let myCarObject = {
    name: "Fiat",
    model: 500,
    weight: 850,
    color: "white",
    start: function() {
        var self = this
        console.log("=>" + this.name + "<=" + " is start running...");
        let runningSelf = function() {
            console.log("=>" + self.name + "<=" + " is start running...")
        }


        // setTimeout(runningSelf, 1000) // nghi 1000ms
        // console.log("Hello")
    }
}
myCarObject.start();

let mySetTimeOut = function(callback) {
    this.name = "My Settimeout"
    return () => {
        console.log("=>" + this.name + "<=" + " is start running...");
    }
}



// studying = () => {
//     console.log("studying");
//     setTimeout(function() {
//         console.log("Go to slepp")
//     }, 3000)
// }
// eatRice = () => {
//     console.log("Eat Rice");
//     setTimeout(studying, 2000)
// }

// doTask = () => {
//     setTimeout(eatRice, 1000)
// }
// doTask();

console.log("----------------------------------------")


const doJop = () => {
    for (i = 0; i < 1000000000; i++) {

    }
}

//Promise
// đưa doJop vào luống xử lý lền
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        doJop()
        resolve({ status: "done" })
    }, 0)
    console.log("Promise done")
})
p.then((value) => {
    console.log("value: ", value.status)
})

// doJop()
console.log("Render()")
console.log("END")