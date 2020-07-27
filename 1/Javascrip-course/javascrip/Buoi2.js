function speak() {
    console.log("hello")
}
speak();

function isEven(value) {
    let remain = value % 2;
    let checker;
    if (remain == 0) {
        checker = true;
    } else {
        checker = false;
    }

    return checker;
}
console.log("la so le? ", isEven(5))

function count(value) {
    if (value <= 0) return
    console.log(value)
    count(--value)
}

function countReverse(value) {
    if (value <= 0) return
    countReverse(--value)
    console.log(value + 1)
        // đệ quy hàm chính nó đến khi value = 0 thì dừng, rồi consolog mới đc chạy.
        // khi đó kết quả sau mỗi vòng đệ quy là 9->0 (vòng lặp 1->10) vòng 1 trả kq =9
        // sau đó kết quả consolog in ra theo thứ tự "vào sau ra trước" tức in KQ vòng lặp 10->1
}

//function expression
// xem laij video
//arrow function (Fat funcion)
// xem laij video

count(10)
console.log("---------------------")
countReverse(10)
console.log("---------------------")
let strX = "1235"
let strX1 = "ss1235"
let strX2 = "123sdsd5"
let x = parseInt(strX)
let x1 = parseInt(strX1)
let x2 = parseInt(strX2)
console.log(strX, typeof(strX))
console.log(x, typeof(x))
console.log(strX1, typeof(strX1))
console.log(x1, typeof(x1))
console.log(strX2, typeof(strX2))
console.log(x2, typeof(x2))
console.log("---------------------")

//math
// let y = Math.random()
// console.log("y = ", y)
// console.log("y*100 = ", y * 100)
// console.log("y*100 = ", Math.floor(y * 100 + 1))

function random1toValue(value) {
    return Math.floor(Math.random() * value + 1)
}
console.log("random 1-100 ", random1toValue(100))

function random0toValue(value) {
    return Math.floor(Math.random() * (value + 1))
}
console.log("random 0-100 ", random0toValue(2))

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}
console.log("random 45-50 ", randomFromTo(45, 50))

//string
let myName1 = "Ten 1"
let myName2 = 'sdsdsd'
let myName3 = `Ten 3 ${myName2} dac biet
adsdsd sd `
console.log("sTring", myName1)
console.log("sTring", myName2)
console.log("sTring", myName3)
console.log("---------------------")

let noidung = "ashjasda A s AHJUsnsnHHj"
console.log("van ban: ", noidung)
console.log("Viet Hoa tat ca: ", noidung.toUpperCase())
console.log("Viet thuong tat ca: ", noidung.toLowerCase())
console.log("vi tri xuat hien 'A' dau tien: ", noidung.indexOf('A'))
console.log("vi tri xuat hien 'A' cuoi cung: ", noidung.lastIndexOf('A'))
console.log("cat chuoi tu 1: ", noidung.slice(5)) // laays tu 1 den 9
console.log("cat chuoi: ", noidung.substr(1, 9)) // lay tu 1 9 ky tu
console.log("kiem tra co ton tai chuoi 'AH' ", noidung.includes("AH"))
console.log("noi chuoi: ", noidung.concat(myName1))