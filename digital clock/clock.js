let hrs = document.querySelector("#HOURS");
let min = document.querySelector("#MIN");
let sec = document.querySelector("#SEC");

let currentTime = new Date();
//console.log(currentTime.getHours());

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();