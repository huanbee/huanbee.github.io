//Array
let myArray = ["so 1", "so 2", "so 3"]
console.log("myArray", myArray)

let lastValue = myArray.pop();
console.log("myArray", myArray)
console.log("last in index of myArray:", lastValue)

myArray.unshift("so 4")
let firstValue = myArray.shift();

console.log("myArray", myArray, firstValue, myArray.indexOf("so 2"))
myArray.push("so 5")
console.log("myArray", myArray, firstValue, myArray.indexOf("so 2"))

console.log("Unreverse:", myArray)

let myArray2 = [...myArray] // cach1 copy mang
    // let myArray2 = myArray.slice() // cach2 copy mang
    //vi gan myArray2 = myArray thi ca 2 tro ve cung 1 vung nho

var valueA = "a"

function changervalue(value) {
    value = "B"
    console.log("doi = " + value);
}
changervalue(valueA)
console.log("valueA:" + valueA)
console.log("Join() myArray:" + myArray.join(", ")) //view array duoi dang string
console.log("---------------------")
let findValue = myArray.find((value, index) => {
    console.log("index, value: ", index, value)
    if (value == "so 2")
        return true
    return false
})
console.log("find(): ", findValue)

//cach 2
// let finder = (value) => {
//     if (value == "so 2")
//         return true
//     return false
// }
// console.log("find(): ", myArray.find(finder))

let filterResult = myArray.filter((value, index, arr) => {
    if (value[0] == "s")
        return true
    return false
})
console.log("---------------------")

console.log("filter Result: ", filterResult)

let mapIndexPlusValueResult = myArray.map((value, index) => {
    return index + "." + value
})
console.log("MAP: ", mapIndexPlusValueResult)
console.log("---------------------")

//
let students = [{
        id: "sv1",
        firstName: "Huan",
        lastName: "Nguyen Tien"
    },
    {
        id: "sv2",
        firstName: "Quan",
        lastName: "Nguyen Hai"
    },
    {
        id: "sv3",
        firstName: "Yen",
        lastName: "Nguyen Thi"
    }
]
console.log(students)

let ids = students.map(students => {
    return students.id
})
let fullName = students.map(students => {
    return students.lastName + " " + students.firstName
})
console.log("id sinh vien:", ids)
console.log("Ho va Ten: ", fullName)
console.log("---------------------")

let myNumber = [3, 4, 5, 2, 1]
myNumber.reduce((previous, value, index, arr) => {
    //console.log("previous, value".previous, value)
    //=> previous: get value of previous in return call function
    return index
}, 0)
console.log("---------------------")
let totoCount = myNumber.reduce((previous, value) => {
        console.log("previous, value", previous, value)
        return previous + value
            //tra ve tổng kết quả 
    }, 0)
    //apply

let applyTotoCount = myNumber.reduce((previous, value) => previous + value)
console.log("applyTotoCount: ", applyTotoCount)

let applyTotoEvenCount = myNumber.reduce((previous, value) => {
    if (value % 2 == 0) {
        return previous + value
    }
    return previous
}, 0)
console.log("applyTotoEvenCount: ", applyTotoEvenCount)