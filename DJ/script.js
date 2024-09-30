function Color() {
    const HEX = "0123456789ABCDEF";
    var color = "#";
    // const rand = ;
    for (let i = 0; i < 6; i++) {
        color = color + HEX[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    // console.log(length.color);
    return color;
}
Color();

var body = document.body;

var changing;
const startcolor = function () {
    changing = setInterval(COLOR,0);
    function COLOR() {
        body.style.backgroundColor = Color();
        document.querySelector("#start").style.backgroundColor = Color();
        document.querySelector("#stop").style.backgroundColor = Color();
        document.querySelector("h1").style.color = Color();
    }
}

const stopcolor = function () {
    clearInterval(changing)
}
document.querySelector("#start").addEventListener("click", startcolor)
document.querySelector("#stop").addEventListener("click", stopcolor)



