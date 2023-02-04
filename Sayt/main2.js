let toogleBtn = document.getElementsByClassName("dropdown-btn")

let uzun = toogleBtn.length

for (let index = 0; index < uzun; index++) {
    const element = toogleBtn[index];

    element.addEventListener("click", (e) => {
        console.log(e.target.parentElement.children);
        let child = e.target.parentElement.children[1].style.height
        let children = e.target.childNodes[1].style.transform
        if (children === "rotate(180deg)") {
            e.target.childNodes[1].style = " transform:rotate(0deg)";
        } else {
            e.target.childNodes[1].style = " transform:rotate(180deg)";
        }
        if (child === "200px") {
            e.target.parentElement.children[1].style.height = "0"
        } else {
            e.target.parentElement.children[1].style.height = "200px"
        }

    })
}

let tt = document.getElementById("rec")

tt.addEventListener("click", (e) => {
    if (e.target.parentElement.childNodes[3].style.height === "0px") {
        e.target.parentElement.childNodes[3].style.height = "50px"
    } else {
        e.target.parentElement.childNodes[3].style.height = "0px"
    }
    if (e.target.parentElement.childNodes[1].childNodes[1].style.transform === "rotate(0deg)") {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = "rotate(-90deg)"
    } else {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = "rotate(0deg)"
    }
})

let tr = document.getElementById("rc")

tr.addEventListener("click", (e) => {
    let zxc = e.target.parentElement.childNodes[3].style.height
    let asd = e.target.parentElement.childNodes[1].childNodes[1].style.transform
    if (zxc === "0px") {
        e.target.parentElement.childNodes[3].style.height = "530px";
    } else {
        e.target.parentElement.childNodes[3].style.height = `0px`;
    }
    if (asd === `rotate(-90deg)`) {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = `rotate(0deg)`
    } else {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = "rotate(-90deg)"
    }
})
let tra = document.getElementById("push")

tra.addEventListener("click", (e) => {
    let zxc = e.target.parentElement.childNodes[3].style.height
    let asd = e.target.parentElement.childNodes[1].childNodes[1].style.transform
    if (zxc === "0px") {
        e.target.parentElement.childNodes[3].style.height = "40px";
    } else {
        e.target.parentElement.childNodes[3].style.height = `0px`;
    }
    if (asd === `rotate(-90deg)`) {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = `rotate(0deg)`
    } else {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = "rotate(-90deg)"
    }
})

let xsw = document.getElementById("zxc")

xsw.addEventListener("click", (e) => {
    let zxc = e.target.parentElement.childNodes[3].style.height
    let asd = e.target.parentElement.childNodes[1].childNodes[1].style.transform
    if (zxc === "0px") {
        e.target.parentElement.childNodes[3].style.height = "120px";
    } else {
        e.target.parentElement.childNodes[3].style.height = `0px`;
    }
    if (asd === `rotate(-90deg)`) {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = `rotate(0deg)`
    } else {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = "rotate(-90deg)"
    }
})

let as = document.getElementById("zxv")

as.addEventListener("click", (e) => {
    let zxc = e.target.parentElement.childNodes[3].style.height
    let asd = e.target.parentElement.childNodes[1].childNodes[1].style.transform
    if (zxc === "0px") {
        e.target.parentElement.childNodes[3].style.height = "120px";
    } else {
        e.target.parentElement.childNodes[3].style.height = `0px`;
    }
    if (asd === `rotate(-90deg)`) {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = `rotate(0deg)`
    } else {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = "rotate(-90deg)"
    }
})

let vf = document.getElementById("xs")

vf.addEventListener("click", (e) => {
    let zxc = e.target.parentElement.childNodes[3].style.height
    let asd = e.target.parentElement.childNodes[1].childNodes[1].style.transform
    if (zxc === "0px") {
        e.target.parentElement.childNodes[3].style.height = "40px";
    } else {
        e.target.parentElement.childNodes[3].style.height = `0px`;
    }
    if (asd === `rotate(-90deg)`) {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = `rotate(0deg)`
    } else {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = "rotate(-90deg)"
    }
})

let fe = document.getElementById("mj")

fe.addEventListener("click", (e) => {
    let zxc = e.target.parentElement.childNodes[3].style.height
    let asd = e.target.parentElement.childNodes[1].childNodes[1].style.transform
    if (zxc === "0px") {
        e.target.parentElement.childNodes[3].style.height = "120px";
    } else {
        e.target.parentElement.childNodes[3].style.height = `0px`;
    }
    if (asd === `rotate(-90deg)`) {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = `rotate(0deg)`
    } else {
        e.target.parentElement.childNodes[1].childNodes[1].style.transform = "rotate(-90deg)"
    }
})
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
    var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
    var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

    var percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function () {
    thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function () {
    thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function () {
    thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
    thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function () {
    thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function () {
    thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function () {
    thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
    thumbRight.classList.remove("active");
});


let zx = document.querySelectorAll(".brand li a input")
let zxuzu = zx.length;
let qwe = document.querySelectorAll(".brand li a")
for (let i = 0; i < zxuzu; i++) {
    const element = zx[i];
    element.addEventListener("click", (e) => {
        for (let i = 0; i < qwe.length; i++) {
            const element = qwe[i];
            if (element.style === `border: 1px solid #DCDFE6;`) {
                element.style = `border: 1px solid gold`
            } else {
                element.style = `border: 1px solid #DCDFE6;`
            }
        }
    })
}
