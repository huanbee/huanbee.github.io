// function btnOnClick() {
//     let ipv = document.getElementById("ipNum").value;
//     var value = Number(ipv)
//     if (isNaN(value)) {
//         alert("Input not number?\nPlease check the Number")
//         document.getElementById("ipNum").value = ""
//         document.getElementById("ipNum").focus()
//     } else
//         alert("So vua nhap: " + ipv)
// }

function btnOnClick() {
    let ipv = document.getElementById("ipNum").value;
    var value = Number(ipv)
    if (isNaN(value)) {
        document.getElementsByTagName("p")[0].innerHTML = "' " + ipv + "' Input not number?\nPlease enter a number"
        document.getElementById("ipNum").value = ""
        document.getElementById("ipNum").focus()
    } else {
        document.getElementsByTagName("p")[0].innerHTML = ipv
    }
}

let btnClick = document.getElementById("btn-click")
btnClick.addEventListener("click", test)

function test() {
    // alert("Test OK")
    btnOnClick();
}



function btnOnClick3() {
    let inputValue = document.getElementById("ipNum")
    var value = Number(inputValue.value)
    let text = ""
    if (isNaN(value)) {
        text = "Please enter a number!"
    } else {
        if (inputValue.value % 2 === 0) {
            text = "EVEN"
        } else {
            text = "ODD"
        }
    }
    let oldResultElem = document.getElementById("result-elem")
    if (oldResultElem !== null) {
        document.body.removeChild(oldResultElem)
    }
    let resultElem = document.createElement("p")
    resultElem.id = "result-elem"
    let textNode = document.createTextNode("Result: " + text)
    resultElem.appendChild(textNode)
    document.body.appendChild(resultElem)

}