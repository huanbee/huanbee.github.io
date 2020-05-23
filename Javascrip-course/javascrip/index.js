//console.log("Hello word")


var myNumber = 10
var myName = "Huan Hoa Dong"

console.log("Type of myNumber: ", typeof(myNumber))
console.log("Type of myName: ", typeof(myName))

var lengthRoad = 150;
var vec = 30;
var timer = lengthRoad / vec;
console.log("Timer: ", timer, "s")

var i = 1
var j = 2
var k = 3
var total = i++ + --i + j++ + ++j + k++
    //      1   +   1 + 2   +   4 + 3
    console.log("total = ", total)

//var, let, const
var a = 5;
let b = 6; {
    console.log("value of a: ", a)
    console.log("value of b: ", b)
} {
    var a2 = 5;
    let b2 = 6;
}
console.log("value of a2:", a2)
    //console.log("value of b2:", b2)
    //=> let chỉ lưu giá trị tức thơif trong 1 funcion
const PI = 3.14;


// difference of == or ===
// == so sanh value, === so sanh them kieu du lieu
console.log("Comparation: ", (1 === "1"))
console.log("Comparation: ", (1 == "1"))
console.log("Comparation: ", ("Ngan2" === "Ngan"))

// var userName = "Huan"
// var userName = prompt("Enter your name:", "")
// if (userName === "Huan") {
//     console.log("Hello Huan")
// } else {
//     console.log("I don't know you")
// }

// or
// switch (userName) {
//     case "Huan":
//         console.log("Chao Huan");
//         break;
//     case "huan":
//         console.log("Chao Huan");
//         break;
//     default:
//         console.log("may deo phai Huan")
// }


if (grade <= 4)
    console.log("Yeu");
else if (grade > 4 && grade <= 6)
    console.log("TB");
else if (grade > 6 && grade < 8)
    console.log("Kha");
else
    console.log("Gioi")

var c = 10;
console.log("====For=====")
for (i = 0; i <= c; i++) {
    console.log(i)
}
console.log("====while=====")
while (c <= 15) {
    console.log(c)
    c++;
}
console.log("====do while=====")
do {
    console.log(c)
    c++;
}
while (c <= 20)
console.log("====For=====")
console.log("====For=====")