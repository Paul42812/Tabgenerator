const text = document.querySelector(".titlec");
var strText = "ExampleText123";
var splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
var timer;
timer = setInterval(onTick, 500);

function onTick() {
    if (char < splitText.length) {
        const span = text.querySelectorAll('span')[char];

        var e = document.getElementById("fgcolors");
        var strUser = e.options[e.selectedIndex].value;

        if (String(strUser) == '&0') {
            console.log(strUser)
            span.classList.add('black');
        }

        if (String(strUser) == '&1') {
            console.log(strUser)
            span.classList.add('dark_blue');
        }

        if (String(strUser) == '&2') {
            console.log(strUser)
            span.classList.add('dark_green');
        }

        if (String(strUser) == '&3') {
            console.log(strUser)
            span.classList.add('dark_aqua');
        }

        if (String(strUser) == '&4') {
            console.log(strUser)
            span.classList.add('dark_red');
        }

        if (String(strUser) == '&5') {
            console.log(strUser)
            span.classList.add('dark_purple');
        }

        if (String(strUser) == '&6') {
            console.log(strUser)
            span.classList.add('gold');
        }

        if (String(strUser) == '&7') {
            console.log(strUser)
            span.classList.add('gray');
        }

        if (String(strUser) == '&8') {
            console.log(strUser)
            span.classList.add('dark_gray');
        }

        if (String(strUser) == '&9') {
            console.log(strUser)
            span.classList.add('blue');
        }

        if (String(strUser) == '&a') {
            console.log(strUser)
            span.classList.add('green');
        }

        if (String(strUser) == '&b') {
            console.log(strUser)
            span.classList.add('aqua');
        }

        if (String(strUser) == '&c') {
            console.log(strUser)
            span.classList.add('red');
        }

        if (String(strUser) == '&d') {
            console.log(strUser)
            span.classList.add('light_purple');
        }

        if (String(strUser) == '&e') {
            console.log(strUser)
            span.classList.add('yellow');
        }

        if (String(strUser) == '&f') {
            console.log(strUser)
            span.classList.add('white');
        }


    }
    if (char > 0) {
        const spanafter = text.querySelectorAll('span')[char - 1];
        spanafter.classList.remove('orange');
        spanafter.classList.remove('black');
        spanafter.classList.remove('dark_blue');
        spanafter.classList.remove('dark_green');
        spanafter.classList.remove('dark_aqua');
        spanafter.classList.remove('dark_red');
        spanafter.classList.remove('dark_purple');
        spanafter.classList.remove('gold');
        spanafter.classList.remove('gray');
        spanafter.classList.remove('dark_aqua');
        spanafter.classList.remove('dark_gray');
        spanafter.classList.remove('green');
        spanafter.classList.remove('blue');
        spanafter.classList.remove('aqua');
        spanafter.classList.remove('red');
        spanafter.classList.remove('light_purple');
        spanafter.classList.remove('yellow')
        spanafter.classList.remove('white')
    }
    char++
    if (char === splitText.length + 1) {
        char = 0;
        return;
    }

}

function updatetext() {
    var inputVal = document.getElementById('text').value;
    if (inputVal.length == 0) {
        inputVal = "ExampleText123"
        alert('"Text" needs to contain a string')
    }

    splitText = (String(inputVal)).split("");

    char = 0;
    text.innerHTML = "";
    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>"
    }

    var inputVal = document.getElementById('speed').value;
    if (inputVal.length == 0) {
        inputVal = 500
        alert('"Delay" needs to contain an intager')
    }
    const parsed = parseInt(inputVal, 10);
    clearInterval(timer);
    timer = setInterval(onTick, parsed);
    char = 0;

    var e = document.getElementById("fgcolors");
    var strUser = e.options[e.selectedIndex].value;

    var f = document.getElementById("bgcolors");
    var strUserr = f.options[e.selectedIndex].value;

    var s = document.getElementById('textfield')
    var p = document.getElementById('text')
    var formtext;

    formtext = p.value;
    a = strUserr;
    b = strUser;

    s.innerHTML = "";
    for (var i = 0; i < formtext.length; i++) {
        s.innerHTML += (a + formtext.substring(0, i) + b + formtext[i] + a + formtext.substring(i + 1, formtext.length))
        s.innerHTML += "\n"
    }
}