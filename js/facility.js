var block = false;
var activeComponent = false;

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

function replaceImage(elem, param) {
    document.querySelector("#image-list").src = param;

    document.querySelector(".component-list").childNodes.forEach(element => {
        if (typeof element.childNodes[0] !== "undefined") {
            if (element.childNodes[0].classList.contains("active-component-list"))
                element.childNodes[0].classList.remove("active-component-list");
        }
    });

    elem.childNodes[0].classList.add("active-component-list");
}

function toImage(elem, param) {
    console.log(elem.innerHTML);
    elem.innerHTML = `<img class='replace-image' src='${param}'/>`;
    elem.classList.add("active-replace-text");
    setTimeout(() => {
        activeComponent = true;
    }, 100);
}

function toText(elem, param) {
    if (activeComponent) {
        elem.innerHTML = `<span>${param}</span>`;
        if (elem.classList.contains("active-replace-text"))
            elem.classList.remove("active-replace-text");
    }
}