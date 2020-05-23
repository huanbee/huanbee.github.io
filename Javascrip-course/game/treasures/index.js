// class User {
//     constructor(step) {
//         this.x = 0;
//         this.y = 0;
//         this.step = 50;

//         this.imgUser = imgUser
//     }
//     draw(ctx) {
//         ctx.drawImage(this.imgUser, this.x, this.y, 50, 50)
//     }
//     moveLeft() {
//         let newPosX = this.x - this.step;
//         if (newPosX >= 0 && newPosX <= 450)
//             this.x = newPosX
//     }
//     moveRight() {
//         let newPosX = this.x + this.step;
//         if (newPosX >= 0 && newPosX <= 450)
//             this.x = newPosX
//     }
//     movedown() {
//         //this.y = this.y + this.step;
//         let newPosY = this.y + this.step;
//         if (newPosY >= 0 && newPosY <= 450)
//             this.y = newPosY
//     }
//     moveUp() {
//         // this.y = this.y - this.step;
//         let newPosY = this.y - this.step;
//         if (newPosY >= 0 && newPosY <= 450)
//             this.y = newPosY
//     }
// }


var imgUser = new Image();
imgUser.src = "./user.jpg"
var imgTrap = new Image();
imgTrap.src = "./trap.png"
var imgQua = new Image();
imgQua.src = "./a.png"

//var user = new User()

// user Object
var user = {
    img: imgUser,
    posX: 0,
    posY: 0,
    width: 50,
    height: 50,
    draw: function(ctx) {
        ctx.drawImage(this.img, this.posX * 50, this.posY * 50, this.width, this.height)
    },
    moveLeft: function() {
        if (this.posX > 0) {
            console.log("key arrow Left")
            this.posX -= 1
        }

    },
    moveRight: function() {
        if (this.posX < 9) {
            console.log("key arrow Right")
            this.posX += 1
        }
    },
    movedown: function() {
        if (this.posY < 9) {
            console.log("key arrow Down")
            this.posY += 1
        }
    },
    moveUp: function() {
        if (this.posY > 0) {
            console.log("key arrow Up")
            this.posY -= 1

        }
    }

}



var matrix = [
    [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, -1, -1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
    [0, -1, 0, -1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, -1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, -1, 0, 0, 1, 0],
    [0, 0, -1, 0, 0, 0, 0, -1, 1, -1],
    [-1, -1, -1, -1, -1, -1, 0, 0, 0, -1]
]

userX = 150;
userY = 0;
userWidth = 50;
userHeight = 50;

vtX = 0;
vtY = 0;
dem = 0;

var numOfKhoBau = matrix.reduce((result, matrixX) => {
    return result + matrixX.reduce((resultX, value) => {
        if (value == 1)
            return resultX += value
        return resultX
    }, 0)
}, 0)
console.log(numOfKhoBau)
var win = 0,
    lose = 0;

function drawMatrix(ctx) {

    for (i = 0; i <= 9; i++) {
        vtX = i;
        for (j = 0; j <= 9; j++) {
            vtY = j;
            if (matrix[j][i] === 1) {
                ctx.drawImage(imgQua, i * 50, j * 50, 50, 50)
                if ((user.posX == vtX && user.posY == vtY)) {
                    matrix[j][i] = 0
                    win += 1;
                    if (win == numOfKhoBau) {
                        alert("ban da win")
                        clearInterval(interval);

                    }
                }

            } else if (matrix[j][i] === -1) {
                ctx.drawImage(imgTrap, i * 50, j * 50, 50, 50)
                if ((user.posX == vtX && user.posY == vtY)) {
                    matrix[j][i] = 0
                    console.log("-1")
                    alert("ban da thua")
                    clearInterval(interval);

                }
            }


        }

    }

}

var interval;
window.onload = () => {
    var c = document.getElementById("myCanvas")
    var ctx = c.getContext("2d")
    user.draw(ctx)
    interval = setInterval(() => {

        ctx.fillStyle = "#00FF00"
        ctx.fillRect(0, 0, 500, 500)
        user.draw(ctx)
        drawMatrix(ctx)

    }, 10);

}

window.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
        case 37:
            user.moveLeft()
            break;
        case 38:
            user.moveUp()
            break;
        case 39:
            user.moveRight()
            break;
        case 40:
            user.movedown()
            break;
    }
})