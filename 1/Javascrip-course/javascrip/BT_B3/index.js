// 21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 90
console.log("-----------B21----------")
let b21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let sumB21 = b21.reduce((previous, value) => previous + value)
console.log("Sum number: ", sumB21)


// 22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5
console.log("-----------B22----------")
let b22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function findMinMax(value) {
    if (value == null) {
        return -1;
    } else {
        let min = value[0],
            max = value[0];
        for (i = 1; i < value.length; i++) {
            if (min > value[i]) {
                min = value[i]
            }
            if (max < value[i]) {
                max = value[i]
            }
        }
        return console.log("Min = " + min + "; Max = " + max + " => TB = " + (min + max) / 2)
    }
}
findMinMax(b22)


// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 3
//let b23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log("-----------B23----------")
let b23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let max = 0;
for (i = 0; i < b23.length; i++) {
    let filterEquaValue = b23.filter((value) => {
        return b23[i] == value;
    })
    cur = filterEquaValue.length
    if (max < cur) max = cur
}
console.log("max: ", max)

// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]
console.log("-----------B24----------")
let b24 = [1, 2, 3, 2, 3, 4, 6, 7]

function isPrimeNumber(value) {
    var isPrime = false;
    if (value > 1) {
        isPrime = true;
        for (j = 2; j <= Math.sqrt(value); j++) {
            if (value % j == 0) {
                isPrime = false
                break;
            }
        }
    }
    return isPrime
}

let resultPrimes = b24.filter(value => {
    return isPrimeNumber(value)
})
console.log("result: ", resultPrimes)

// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]
console.log("-----------B25----------")
let b25 = [1, 2, 3, 2, 3, 4, 6, 7]
let b = []

function bp_b25(value) {

    if (value == null)
        return -1;
    else {
        for (i = 0; i < value.length; i++) {

            b.push(value[i] * value[i])
        }
        return console.log("Binh phuong mang=>\n", b)
    }
}
console.log(b25)
bp_b25(b25);


// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. 
// Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]
console.log("-----------B26----------")
let b26 = [1, 2, 3, 4, 6, 7];
let soKb26 = 7;
let min = Infinity
for (i = 0; i < b26.length; i++) {

}

// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age.
//Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
// VD: students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// Output: [ {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     }]
console.log("-----------B27----------")
students = [{
        id: "T3HXX2",
        firstName: "Hpsa",
        lastName: "Do Thi    Thu"
    },
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen    Nhat"
    }
]

function b27(value) {
    for (i = 0; i < value.length; i++) {
        value[i].firstName = value[i].firstName.trim().toLowerCase();
        value[i].firstName = value[i].firstName.charAt(0).toUpperCase() + value[i].firstName.slice(1);

        value[i].lastName = value[i].lastName.trim().toLowerCase();
        while (value[i].lastName.indexOf("  ") != -1)
            value[i].lastName = value[i].lastName.replace("  ", " ");
        let res = value[i].lastName.split(" ")
        value[i].lastName = "";
        for (j = 0; j < res.length; j++) {
            value[i].lastName += res[j].charAt(0).toUpperCase() + res[j].slice(1);
            if (j < res.length - 1) {
                value[i].lastName += " ";
            }
        }
    }
    for (i = 0; i < value.length; i++) {
        if ((value[i].firstName.length >= 3 && value[i].firstName.indexOf("a") >= 0) || (value[i].firstName.length >= 3 && value[i].firstName.indexOf("A") >= 0))
            console.log(value[i]);
    }
}

b27(students)


// 28. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. 
//Hãy tìm tất cả học sinh cá biệt của lớp biết rằng học sinh cá biệt có họ là “Do”.
// VD: students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// Output: [{
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//  }]
console.log("-----------B28----------")
students1 = [{
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]

function b28(value) {
    for (i = 0; i < value.length; i++) {
        value[i].firstName = value[i].firstName.trim().toLowerCase();
        value[i].firstName = value[i].firstName.charAt(0).toUpperCase() + value[i].firstName.slice(1);

        value[i].lastName = value[i].lastName.trim().toLowerCase();
        while (value[i].lastName.indexOf("  ") != -1)
            value[i].lastName = value[i].lastName.replace("  ", " ");
        let res = value[i].lastName.split(" ")
        value[i].lastName = "";
        for (j = 0; j < res.length; j++) {
            value[i].lastName += res[j].charAt(0).toUpperCase() + res[j].slice(1);
            if (j < res.length - 1) {
                value[i].lastName += " ";
            }
        }
    }
    for (i = 0; i < value.length; i++) {
        if (value[i].lastName.indexOf("Do") >= 0)
            console.log(value[i]);
    }
}

b28(students1)

// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age.
//Hãy sắp xếp danh sách học viên theo tên (firstName).
// VD: students = [
//     {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// Output: students = [
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
console.log("-----------B29----------")
students3 = [{
        id: "T3HXX1",
        firstName: "Ngan",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "AMinh",
        lastName: "Nguyen Nhat"
    }
]

//sx ten tang dan
//cach 1:
//students3.sort((a, b) => a.firstName.localeCompare(b.firstName)) 

//cach 2:
students3.sort((a, b) => a.firstName !== b.firstName ? a.firstName < b.firstName ? -1 : 1 : 0);

//cach 3:
// students3.sort(function(a, b) {
//     var nameA = a.firstName.toLowerCase(),
//         nameB = b.firstName.toLowerCase();
//     if (nameA < nameB) //sort string ascending
//         return -1;
//     if (nameA > nameB)
//         return 1;
//     return 0; //default return value (no sorting)
// });

console.log(students3)



// 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 8
// VD: a = [1,1,1,1,1,1,1,1,1,1], output: -1
console.log("-----------B30----------")
let b30 = [1, 1, 1, 1, 14, 17, 1]

function timMax2st(value) {
    value.sort(function(a, b) { return b - a })
    let max = value[0];

    while (value[0] == max)
        value.shift();

    console.log(value)
    if (value.length != 0)
        return value[0]
    else return -1
}



console.log("So lon t2: ", timMax2st(b30))




// 31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 26 .Output: YES.giải thích ( 9 + 9 + 8)
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 30 .Output: NO
console.log("-----------B31----------")
let b31 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let soK = 30;

function timso(value, sk) {
    for (i = 0; i <= value.length - 2; i++) {
        for (j = 1; j <= value.length - 1; j++) {
            for (k = 2; k <= value.length; k++) {
                if (value[i] + value[j] + value[k] == sk)
                    return console.log("K = ", sk, " => Yes")
            }
        }
    }
    return console.log("K = ", sk, " => No")
}
timso(b31, soK)



// 32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
// VD: a = [1,3,6,9,11,20]; k = 13 .Output: a = [1,3,6,9,11,13,20]
console.log("-----------B32----------")
let b32 = [1, 3, 6, 9, 11, 20];
soK32 = 13;
b32.push(soK32)
b32.sort(function(a, b) { return a - b });
console.log(b32)

// lap i-> length, if a[i]<k => b32.splice(i,0,k)


// 33. [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
// VD: a = [9,8,7,6,5,4,3,2,1];  .Output: [1,2,3,4,5,6,7,8,9]
console.log("-----------B33----------")
let b33 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
b33 = b33.reverse();
console.log(b33)
console.log("---------------------")