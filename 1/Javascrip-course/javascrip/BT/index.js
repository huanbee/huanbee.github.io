var bt1 = prompt("BT1. Viết chương trình in ra các số từ 1 đến n. Nhap n: ", "")
document.write("<h3>BT1. Viết chương trình in ra các số từ 1 đến " + bt1 + ":</h3>")
for (i = 1; i <= bt1; i++) {
    document.write(i + " ")

}

var bt2 = prompt("BT2. Viết chương trình in ra các số lẻ từ 1 đến n. Nhap n: ", "")
document.write("<h3>BT2. Viết chương trình in ra các số lẻ từ 1 đến " + bt2 + ":</h3>")
for (i = 1; i <= bt2; i++) {
    if (i % 2 == 1)
        document.write(i + " ")
}

var bt3 = prompt("BT3. Viết chương trình in ra các số chẳn từ 1 đến n. Nhap n: ", "")
document.write("<h3>BT3. Viết chương trình in ra các số chẳn từ 1 đến " + bt3 + ":</h3>")
for (i = 1; i <= bt3; i++) {
    if (i % 2 == 0)
        document.write(i + " ")
}

var bt4 = prompt("BT4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n. Nhap n: ", "")
document.write("<h3>BT4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến " + bt4 + ":</h3>")
for (i = 2; i <= bt4; i++) {
    count = 0;
    for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 0) {
        document.write(i + " ")
    }
}

// function isPrimeNumber(value) {
//     var isPrime = false;
//     if (value > 1) {
//         isPrime = true;
//         for (j = 2; j <= Math.sqrt(i); j++) {
//             if (value % j == 0) {
//                 isPrime = false
//                 break;
//             }
//         }
//     }
//     return isPrime
// }




var bt5 = prompt("BT5. Viết chương trình tính tổng từ 1 đến n. Nhap n: ", "")
document.write("<h3>BT5. Viết chương trình tính tổng từ 1 đến " + bt3 + ":</h3>")
var Tong = 0;
for (i = 1; i <= bt5; i++) {
    Tong += i;
}
document.write(Tong + " ")
var bt6 = prompt("BT6. Viết chương trình tính tổng bình phương của các số từ 1 đến n. Nhap n: ", "")
document.write("<h3>BT6. Viết chương trình tính tổng bình phương của các số từ 1 đến " + bt3 + ":</h3>")
var Tongbp = 0;
for (i = 1; i <= bt6; i++) {
    Tongbp += i * i;
}
document.write(Tongbp + " ")
var bt7 = prompt("BT7. Tính tổng các số lẻ trong khoảng 1 đến n. Nhap n: ", "")
document.write("<h3>BT7. Tính tổng các số lẻ trong khoảng 1 đến " + bt3 + ":</h3>")
var TongLe = 0;
for (i = 1; i <= bt7; i++) {
    if (i % 2 == 1)
        TongLe += i;
}
document.write(TongLe + " ")
var bt8 = prompt("BT8. Kiểm tra số n có toàn số lẻ tạo thành hay không. Nhap n: ", "")
document.write("<h3>BT8. Kiểm tra số " + bt8 + " có toàn số lẻ tạo thành hay không?</h3>")
var sole = 0;
for (i = 0; i < bt8.length; i++) {
    if (bt8[i] % 2 == 0)
        sole++;
}
if (sole == 0)
    document.write(bt8 + " la so toan le")
else
    document.write(bt8 + " khong phai so toan le")

var bt9 = prompt("BT9. Kiểm tra n có phải là số đối xứng. Nhap n: ", "")
document.write("<h3>BT9. Kiểm tra " + bt9 + " có phải là số đối xứng:</h3>")
var sum = 0,
    r, temp;
for (temp = bt9; bt9 != 0; bt9 = bt9 / 10) {
    r = bt9 % 10;
    sum = sum * 10 + r;
}
if (temp == sum)
    document.write(bt9 + " la so doi xung")
else
    document.write(bt9 + " khong phai la so doi xung")

document.write("<h3>BT10. Bang cuu chuong</h3>")
for (i = 2; i <= 9; i++) {
    for (j = 1; j <= 10; j++) {
        document.write(i + "x" + j + "=" + i * j)
        document.write("</br>")
    }

    document.write("</br>")
}