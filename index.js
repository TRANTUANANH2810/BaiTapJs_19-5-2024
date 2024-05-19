document.getElementById("log-4").onclick = function () {
    var n = +document.getElementById("n-4").value;
    var tongMin = whileSumMin(n);
    document.getElementById("kq-log-4").innerHTML =
        "Số nguyên dương min 1+2+3+...+ " + n + "> 10000:::" + tongMin;
};

function whileSumMin(n) {
    var Sum = 0;
    var so = 0;
    while (Sum < n) {
        so++;
        Sum = Sum + so;
    }
    return Sum;
}
