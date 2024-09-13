// write js code here if required
let p = document.getElementById("timer");
var dAte = new Date();

function updateTime() {
    var dAte = new Date();

    // console.log(dAte);
    let day = dAte.getDate()
    // console.log(day);
    let mon = dAte.getMonth() + 1;
    // console.log(mon);
    let year = dAte.getFullYear();
    // console.log(year);
    let hour = dAte.getHours()
    
    let min = dAte.getMinutes()

    let sec = dAte.getSeconds()

    let str = day + "/" + mon + "/" + year + "," + hour + ":" + min + ":" + sec;

    p.innerHTML = str
    
    
    
}
updateTime()

setInterval(updateTime, 1000)