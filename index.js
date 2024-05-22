document.getElementById("log-4").onclick = function () {
    var n = +document.getElementById("n-4").value;
    var tongMin = whileSumMin(n);
    document.getElementById("kq-log-4").innerHTML =
        "Số nguyên dương min 1+2+3+...+ " + n + "> 10000:::" + tongMin;
};

// b1:
function whileSumMin(n) {
    var Sum = 0;
    var so = 0;
    while (Sum < n) {
        so++;
        Sum = Sum + so;
    }
    return Sum;
}

function doWhileSumMin(n) {
    var Sum = 0;
    var so = 0;
    do {
        so++;
        Sum = Sum + so;
    } while (Sum < n);

    return Sum;
}

function forSumMin(n) {
    var Sum = 0;
    for (var n = 1; Sum <= n; n++) {
        Sum += n;
    }

    return Sum;
}

// bai 2:

document.getElementById("btn-b2").onclick = function () {
    var x = +document.getElementById("x").value;
    var n = +document.getElementById("n").value;
    var SumB2 = doWhileSumB2(x, n);

    document.getElementById("kq-log-b2").innerHTML =
        "Tổng của chuỗi số là: " + SumB2;
};

function whileSumB2(x, n) {
    var sum = 0;
    var i = 1;

    while (i <= n) {
        // Math.pow ham mu
        sum += Math.pow(x, i);
        i++;
    }
    return sum;
}

function doWhileSumB2(x, n) {
    var sum = 0;
    var i = 1;
    do {
        sum += Math.pow(x, i);
        i++;
    } while (i <= n);
    return sum;
}

function forSumB2(x, n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    return sum;
}

// Bai3:

document.getElementById("btn-b3").onclick = function () {
    var n = +document.getElementById("n3").value;

    var GT = forGiaiThua(n);
    document.getElementById("kq-log-b3").innerHTML =
        "Giai thua cua N là: " + GT;
};

function whileGiaiThua(n) {
    var giaiThua = 1;
    var i = 1;

    while (i <= n) {
        giaiThua *= i;
        i++;
    }

    return giaiThua;
}

function doWhileGiaiThua(n) {
    var giaiThua = 1;
    var i = 1;

    do {
        giaiThua *= i;
        i++;
    } while (i <= n);

    return giaiThua;
}

function forGiaiThua(n) {
    var giaiThua = 1;
    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }

    return giaiThua;
}

// Bai4 :

document.getElementById("btn-b4").onclick = function () {
    var container = document.getElementById("container");
    container.innerHTML = "";
    var b4 = forClickBtnShowDiv();
};

function whileClickBtnShowDiv() {
    var i = 1;
    while (i <= 10) {
        var div = document.createElement("div");
        div.textContent = "Div " + i;
        div.classList.add("box");
        if (i % 2 === 0) {
            div.style.backgroundColor = "red";
        } else {
            div.style.backgroundColor = "green";
        }
        container.appendChild(div);
        i++;
    }
}
function dowhileClickBtnShowDiv() {
    var i = 1;

    do {
        var div = document.createElement("div");
        div.textContent = "Div " + i;
        div.classList.add("box");
        if (i % 2 === 0) {
            div.style.backgroundColor = "red";
        } else {
            div.style.backgroundColor = "green";
        }
        container.appendChild(div);
        i++;
    } while (i <= 10);
}

function forClickBtnShowDiv() {
    for (var i = 1; i <= 10; i++) {
        var div = document.createElement("div");
        div.textContent = "Div " + i;
        div.classList.add("box");
        if (i % 2 === 0) {
            div.style.backgroundColor = "red";
        } else {
            div.style.backgroundColor = "green";
        }
        container.appendChild(div);
    }
}

// bai5

document.getElementById("btn-b5").onclick = function () {
    var n = document.getElementById("n5").value;

    var checkPrime = whileFindSoNguyenTo(n);

    document.getElementById("kq-log-b5").innerHTML =
        "So Nguyen to cua day so tu 1==> N :: " + checkPrime;
};

//Kiem tra so Nguyen to
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function whileFindSoNguyenTo(n) {
    if (n < 2) {
        return " khong co so nguyen to nao ";
    }
    var primeN = [];
    for (var i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primeN.push(i);
        }
    }
    return primeN.join(",");
}
