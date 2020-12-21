var block = false;

var x;
var y;

var creation = 0;

function creationVisible() {
    if (creation === 0) {
        document.querySelector(".creation-container").classList.remove("display-no");
        creation++;
    } else {
        document.querySelector(".creation-container").classList.add("display-no");
        creation--;
    }
}

function popup(param, type) {
    block = true;
    x = window.scrollX;
    y = window.scrollY;

    var popup = document.querySelector("#popup");
    var popup_cont = document.querySelector("#popup-content");

    popup_cont.innerHTML = param.childNodes[0].outerHTML;

    popup.classList.add("stop-scrolling");
    popup.classList.remove("display-no");

    if (type === "video") {
        popup_cont.childNodes[0].play();
        popup_cont.childNodes[0].controls = true;
    }

}

document.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains("popup") || e.target.classList.contains("popup-content")) {
        block = false;
        var popup = document.querySelector("#popup");
        var popup_cont = document.querySelector("#popup-content");

        popup_cont.outerHTML = '<div id="popup-content" class="popup-content"></div>'

        popup.classList.add("display-no");
    }
});

window.addEventListener('scroll', e => {
    if (block === true) {
        window.scrollTo(x, y);
    }
})