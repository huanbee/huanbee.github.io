// Bai 11  Đếm có bao nhiêu khoảng trắng trong một chuỗi?
function b11(value) {
    let dem = 0;
    for (i = 0; i <= value.length; i++) {
        if (value[i] == " ")
            dem++;
    }
    return dem;
}
console.log(b11(" Hello  world"))

// Bai 12Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
function b12(value) {
    value = value.trim();
    for (i = 0; i <= value.length; i++) {
        if (value[i] == " ")
            value = value.replace(" ", "");
        if (value[i] == "\n")
            value = value.replace("\n", "");
    }
    return value;
}
console.log(b12("	Hello world   "))

// 13. Hãy viết chương trình đảo ngược sau s
function b13(value) {
    value = value.split("").reverse().join("");
    //split:    là phương thức tách 1 chuỗi thành 1 mảng các phần tử
    //reverse:  đảo ngược 1 "mảng" tại chỗ
    //join:     là phương thức nối tất cả các phần tử của mảng lại thành 1 chuỗi
    return value;
}
console.log(b13("This is a beautiful day"))

// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
function b14(value1, value2) {
    let vtrii;
    if (value1.includes(value2)) {
        vtrii = value1.indexOf(value2)
    } else return null;
    return vtrii;
}
console.log(b14("This is a beautiful day", "is"))

// 15. Viết chương trình chuẩn hóa họ tên.
function b15(value) {
    value = value.trim().toLowerCase();
    while (value.indexOf("  ") != -1)
        value = value.replace("  ", " ");
    let res = value.split(" ");
    let chuoi = "";
    console.log(res)
    for (i = 0; i < res.length; i++) {
        chuoi += res[i].charAt(0).toUpperCase() + res[i].slice(1);
        if (i < res.length - 1) {
            chuoi += " ";
        }
    }
    return chuoi;
}
console.log(b15("NguyeN   THI     tHu hA"))

// 16. Viết chương trình lấy  id name của fb.
function b16(value) {
    let vt = value.lastIndexOf(".com/")
    return value.slice(vt + 5)
}
console.log(b16("https://www.facebook.com/ngothucdat"))

// 17.  Viết hàm số tính min, max của 3 số?
function b17(value1, value2, value3) {
    let min = value1,
        max = value1;
    if (min > value2) {
        min = value2;
    } else if (min > value3) {
        min = value3;
    }
    if (max < value2) {
        max = value2;
    } else if (max < value3) {
        max = value3;
    }
    return console.log("min = ", min, "max = ", max)
}
b17(6, 3, 5)

// 18. Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y?
function b18(value1, value2) {
    let vt = value1.lastIndexOf(value2)
    if (vt >= 0) return vt + 1;
    return vt;
}
console.log(b18("hi hi hi hi hi", "hi"))

// 19.  Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop? (đệ quy, recursive)
let sum = 0;

function b19(value) {
    if (value <= 0) return sum;
    sum += value + b19(--value)
    return sum;
}
console.log("kq: ", b19(9))

// 20. Viết 1 hàm chuẩn hóa so sánh của một string, và trả về Xâu chuẩn. Xâu chuẩn là sâu không tồn tại các dấu cách(space) và tab and enter trong value(value là giá trị trong 
function b20(value) {
    while (value.indexOf("\t") != -1)
        value = value.replace("\t", " ");
    while (value.indexOf("\n") != -1)
        value = value.replace("\n", " ");
    while (value.indexOf("  ") != -1)
        value = value.replace("  ", " ");

    while (value.indexOf(' " ') != -1)
        value = value.replace(' " ', '" ');
    while (value.indexOf(' "') != -1)
        value = value.replace(' "', '"');
    while (value.indexOf('=" ') != -1)
        value = value.replace('=" ', '= "');

    return value;
}
console.log(b20(`computer = " ngan    98    " AND class = "  REACTJS2002 "`))

// cach 2
// let queriesStr = `computer = " ngan    98    " AND class = "  REACTJS2002 "`;
// let queries = queriesStr.split(/"*"/)
// for (i = 0; i < queries.length; i += 2) {
//     queries[i] = '"' + queries[i].trim() + '"'
// }
// let result = queries.join("")
// console.log(result);