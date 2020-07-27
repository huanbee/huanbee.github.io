function updateTime() {
    let showtime = document.getElementById("show-time")
    showtime.innerHTML = new Date().toLocaleString()
}
updateTime()

let loop = setInterval(updateTime, 1000)
let stopOclock = () => {
    clearInterval(loop);
}
let startOclock = () => {
    loop = setInterval(updateTime, 1000)
}