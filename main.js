let a = '';
let b = '';
let sing = '';
let finish = false;

let out = document.querySelector(".screen p")

function clearAll() {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;
let digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
let active = ['+', '-', 'X', '/']

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (b === '' && sing === '') {
            a += key;
            console.table(a, b, sing);
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = a;
        } else {
            b += key;
            out.textContent = b;
        }
        return;
    } if (active.includes(key)) {
        sing = key;
        console.table(a, b, sing);
        out.textContent = sing;
        return;
    } if (key === '=') {
        if (b === '') b = a;
        switch (sing) {

            case "+":
                a = (+a) + (+b);
                out.textContent = a;
                break;
            case "-":
                a = a - b
                out.textContent = a;
                break;
            case "/":
                a = a / b;
                out.textContent = a;
                break;
            case "X":
                a = a * b;
                out.textContent = a;
                break;
        }
        finish = true;
        out.textContent = a;
    }
}