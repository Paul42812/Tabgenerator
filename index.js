var char = 0;
const text = document.querySelector(".titlec");
text.textContent = "";
var timer;

var delay = 1000;
var strText = "ExampleText123";
var fg = "blue";
var bg = "dark_gray";

var splitText = strText.split("");

function update() {
    splitText = strText.split("");
    text.textContent = "";
    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>"
    }
    char = 0;

    var t = document.querySelectorAll('span');
    for (let c = 0; c < t.length; c++) {
        try {
            t[c].classList.add(bg)
        } catch {}
    }

    clearInterval(timer)
    timer = setInterval(onTick, delay)
}

update();

function onTick() {
    if (char < splitText.length) {
        const span = text.querySelectorAll('span')[char];

        span.classList.add(fg);
        try {
            span.classList.remove(bg);
        } catch {}
    }
    if (char > 0) {
        const spanafter = text.querySelectorAll('span')[char - 1];

        spanafter.classList.remove(fg);
        try {
            spanafter.classList.add(bg)
        } catch {}
    }
    char++
    if (char == splitText.length + 1) {
        char = 0;
        return;
    }
}

function updatetext() {
    if (document.getElementById("speed").value < 50) {
        alert('Your delay is too short');
        delay = 50;
    } else {
        delay = document.getElementById("speed").value;
    }

    if (document.getElementById("text").value.length == 0) {
        alert('Your text semes empty I`ll set it to "ExampleText123" for you')
        strText = "ExampleText123";
    } else {
        strText = document.getElementById("text").value;
    }

    var fgcolors = document.getElementById("fgcolors");
    var fgcolorsv = fgcolors.options[fgcolors.selectedIndex];
    fg = fgcolorsv.innerHTML.replace(' ', '_');
    var a = fgcolorsv = fgcolors.options[fgcolors.selectedIndex].value;

    var bgcolors = document.getElementById("bgcolors");
    var bgcolorsv = bgcolors.options[bgcolors.selectedIndex];
    bg = bgcolorsv.innerHTML.replace(' ', '_');
    var b = bgcolorsv = bgcolors.options[bgcolors.selectedIndex].value;

    var s = document.getElementById('textfield')

    s.innerHTML = "";
    for (var i = 0; i < strText.length; i++) {
        s.innerHTML += (a + strText.substring(0, i) + b + strText[i] + a + strText.substring(i + 1, strText.length))
        s.innerHTML += "\n"
    }

    update();
}