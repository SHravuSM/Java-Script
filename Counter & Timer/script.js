var display = document.querySelector("h1");
var start = document.querySelector("#btn1");
var resetted = document.querySelector("#btn3");
var stoped = document.querySelector("#btn2");

// var startTime = function () {
//     var started
// setInterval(() => {
//     let i = 0;
//     while (i <= 9) {
//         setTimeout(() => {
//             console.log("Heyy");
//             started = display.innerHTML = i;
//             console.log(i);
//             i++;
//         }, 1000);
//     }
// }, 2000);

// var started = 
var set
function started() {
    var i = 0;
    var j = 0;
    while (i < 1) {
        // for(i=0;i<(i+1);i++){
        set = setInterval(() => {
            // console.log(j);
            display.innerHTML = j;
            j = j + 1;
        }, 1000);
        i++;
    }

}

// for(let i = 0; i<9; i++){
// var j = 0;
// while (j < 9) {+++--
//     j++;
// }
// setInterval(console.log(i),2000);
// }
// setInterval(() => {
//     // for(var i=1;i<=10;i++){
//     // }
//     console.log(a);
// }, 1000);

start.addEventListener("click", started)
var stop = function(){
    clearInterval(set);
}
stoped.addEventListener("click", stop)
var reset = function(){
    clearInterval(set);
    display.innerHTML = "STOP - WATCH"
}
resetted.addEventListener("click", reset)