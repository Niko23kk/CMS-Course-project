let index = 1;
var block = false;

var x;
var y;

function nextArticle(param) {
    let container = document.querySelector(".theory");
    // container.childNodes[index].querySelector(".video-presentation").pause();
    container.childNodes[index].classList.add("transform-out");

    if (param === "bottom") {
        up();
    }

    setTimeout(() => {
        container.childNodes[index].classList.add("display-no");
        container.childNodes[index].classList.remove("transform-out");
        index = index + 2;
        container.childNodes[index].classList.remove("display-no");
        if (index != 1) {
            document.querySelector(".top-button").querySelector("#left").classList.remove("display-no");
            document.querySelector(".bottom-button").querySelector("#left").classList.remove("display-no");
        } else {
            document.querySelector(".top-button").querySelector("#left").classList.add("display-no");
            document.querySelector(".bottom-button").querySelector("#left").classList.add("display-no");
        }

        if (index != 9) {
            document.querySelector(".top-button").querySelector("#right").classList.remove("display-no");
            document.querySelector(".bottom-button").querySelector("#right").classList.remove("display-no");
        } else {
            document.querySelector(".top-button").querySelector("#right").classList.add("display-no");
            document.querySelector(".bottom-button").querySelector("#right").classList.add("display-no");
        }
    }, 800);
}

function up() {
    var t;
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -10);
        t = setTimeout('up()', 1);
    } else clearTimeout(t);
    return false;
}

function prevArticle(param) {
    let container = document.querySelector(".theory");
    container.childNodes[index].classList.add("transform-in");
    // container.childNodes[index].querySelector(".video-presentation").pause();

    if (param === "bottom") {
        up();
    }

    setTimeout(() => {
        container.childNodes[index].classList.add("display-no");
        container.childNodes[index].classList.remove("transform-in");
        index = index - 2;
        container.childNodes[index].classList.remove("display-no");
        if (index != 1) {
            document.querySelector(".top-button").querySelector("#left").classList.remove("display-no");
            document.querySelector(".bottom-button").querySelector("#left").classList.remove("display-no");
        } else {
            document.querySelector(".top-button").querySelector("#left").classList.add("display-no");
            document.querySelector(".bottom-button").querySelector("#left").classList.add("display-no");
        }

        if (index != 9) {
            document.querySelector(".top-button").querySelector("#right").classList.remove("display-no");
            document.querySelector(".bottom-button").querySelector("#right").classList.remove("display-no");
        } else {
            document.querySelector(".top-button").querySelector("#right").classList.add("display-no");
            document.querySelector(".bottom-button").querySelector("#right").classList.add("display-no");
        }
    }, 800);
}


function popup(param) {
    block = true;
    x = window.scrollX;
    y = window.scrollY;

    var popup = document.querySelector("#popup");
    var popup_cont = document.querySelector("#popup-content");

    popup_cont.innerHTML = param.outerHTML;

    popup.classList.add("stop-scrolling");
    popup.classList.remove("display-no");

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