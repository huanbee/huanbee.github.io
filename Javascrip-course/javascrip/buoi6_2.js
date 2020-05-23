let element = document.getElementsByTagName("h3")
let h3 = element[0]
h3.style.color = 'red'




/* add class vao h3: 
// h3.classList.add("ten_class")
//or
// h3.setAttribute("style", "color: red")
*/
console.log("Element: ", h3);



function buttonOnclick() {
    var txt = document.getElementById("txt").value;
    if (txt % 2 == 0)
        alert("so chan")
    else
        alert("so le")
}