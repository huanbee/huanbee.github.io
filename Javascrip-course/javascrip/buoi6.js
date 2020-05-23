//Obj - Huong doi tuong
/*
function createNewPerson(name) {
    const obj = {
        name: name,
        getting: function() {
            alert("Hi, i'm ", this.name)
        }
    }
    return obj
}
const preson1 = createNewPerson("Huan")
console.log(preson1.name)
    // preson1.getting() 
preson1.age = 20
console.log(preson1.age)

//them 1 function vao obj
preson1.hello = function() {
        alert(this.name + " say hello")
    }
    // preson1.hello()

*/
// **************************************************************************
/*// cach 2 tao 1 Obj

function Preson(name) {
    this.name = name;
    this.getting = function() {
        alert("Hi, i'm ", this.name)
    }

    // chuyen het sang String khi goi Obj ra
    this.toString = function() {
        return "Name: " + this.name
    }
}
let preson2 = new Preson("Bob")
let preson3 = new Preson("Thu")
console.log("preson2: ", preson2.name)
console.log("preson3: ", preson3)
console.log("preson3: ", preson3.toString())

// gan age mặc định cho các phép kế thừa sau được khởi tạo
Preson.prototype.age = 20
console.log("preson2 age: ", preson2.age)

console.log("*************************************")
*/

// **************************************************************************
/*tính đóng gói (encapsulation)
function Preson_(_name) {
    var name = _name;
    this.getting = function() {
        alert("Hi, i'm ", this.name)
    }
    this.getName = function() {
        return name
    }

}
let preson1_ = new Preson_("Huan")
    // preson1_.getting();
console.log(preson1_.name)
    // ko cho goi trực tiếp các thuộc tính ở trong obj hay thay đôir nó ("var")
console.log(preson1_.getName())
*/

// **************************************************************************
/*
// function Array() {
//     var a = []
//     var size = 0
//     this.append = function(value) {
//         a.push(value)
//         size = a.length
//         Size = a.length
//     }
//     this.values = function() {
//         return a;
//     }
//     this.getSize = function() {
//         return size, Size;
//     }
// }
// let myArray = new Array()
// myArray.append(3)
// myArray.append(5)
// console.log(myArray.values())
// console.log(myArray.getSize())
*/

// **************************************************************************
/* // Kế Thừa */
function Preson(name) {
    this.name = name;
    this.getting = function() {
        alert("Hi, i'm ", this.name)
    }

    // chuyen het sang String khi goi Obj ra
    this.toString = function() {
        return "Name: " + this.name
    }
}

function Student(_name, mark) {
    this.mark = mark
    this.name = _name
    Preson.call(this, this.name)
    this.goToSchool = function() {
        console.log("Go to School")
    }
}
let newStd = new Student()
newStd.goToSchool();
// newStd.getting();

function Teacher(name) {
    this.name = name
    this.goToSchool = function() {
        console.log("Check")
    }
}

// class
class PresonClass {
    constructor(age) {
        this.age = age
    }
    go = () => {
        alert("Go")
    }
}


class stdClass extends PresonClass {
    constructor(name, age) {
        super(age)
        this.name = name;
    }
    goToSchool = () => {
        alert("Go to School " + this.name)
    }
}

let myStd = new stdClass("Ngan")
myStd.goToSchool()
myStd.go()


/*

let strValue = "hello"
let strValueObj = new String("Hello")
console.log("strValue: ", strValue)
console.log("strValueObj: ", strValueObj.toString())

*/