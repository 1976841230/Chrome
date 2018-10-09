function clock(e) {

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var time = h + ":" + m + ":" + s;
    e.innerHTML = time;
    setTimeout(function () {
        clock(e);
    }, 1000);
}

var clock_div = document.getElementById("clock_div");
clock(clock_div);
