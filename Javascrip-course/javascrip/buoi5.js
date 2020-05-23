// function dojob() {
//     console.log("Start do job")
//     setTimeout(() => {
//             console.log("Start cooking rice")
//         }, 1000) // sau 1s thi chay
//     console.log("End job")
// }

// dojob();
// console.log("Studying......")

// Start do job
// End job (Sleep 1s, cac luồng khác vẫn đc chạy tiếp)
// Studying......"
// Start cooking rice



//xử lý bất đồng bộ
let cookingRice = resolve => {
    console.log("Start cooking rice")
    setTimeout(() => {
        resolve({ status: "true", des: "Done cooking rice" })
    }, 2000)
}
let cookingSoup = resolve => {
    console.log("Done cooking rice")
    console.log("Start cooking Soup")
    setTimeout(() => {
        resolve({ status: "true", des: "Done cooking Soup" })
    }, 3000)
}
let cookingFish = resolve => {
    console.log("Done cooking soup")
    console.log("Start cooking Fish")
    setTimeout(() => {
        resolve({ status: "true", des: "Done cooking Fish" })
    }, 3000)
}

// var p = new Promise(cookingRice)

// new Promise(cookingRice).then(data => {
//     console.log(data)
//     return new Promise(cookingSoup)
// }).then(data => {
//     console.log(data)
//     return new Promise(cookingFish)
// }).then(data => {
//     console.log(data)
// })


async function doJobAsync() {
    const result = await p;
    console.log("result: ", result)
}


//api
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
            console.log(this.responseText)
        }
    };
    xhttp.open("GET", "https://www.mocky.io/v2/5185415ba171ea3a00704eed", true);
    xhttp.send();
}
loadDoc;

const response = fetch("https://www.mocky.io/v2/5185415ba171ea3a00704eed")
const data = response.then(async data => {
    const myJson = await data.json();
    console.log(myJson)
})
response;

//cach 2:
// async function requestApi1(url) {
//     const response = fetch(url)
//     const data = await response
//     const myJson = await data.json();
//     console.log(myJson)
// }
// requestApi1("https://www.mocky.io/v2/5185415ba171ea3a00704eed")


async function requestApi(url) {
    const response = fetch(url) // fetch dung request api chay ngam
    const data = await response
        // const myJson = await data.json();
        // console.log(myJson)
    return data.json();
}
url = "https://www.mocky.io/v2/5185415ba171ea3a00704eed"
const dataP = requestApi(url)
dataP.then((data) => {
    console.log("data: ", data)
})