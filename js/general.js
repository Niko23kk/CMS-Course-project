window.addEventListener('scroll', e => {
    let element = document.querySelector(".buttom-to-top");
    if (window.pageYOffset >= 100) {
        element.classList.remove("opacity");
    } else {
        element.classList.add("opacity");
    }
})

function backToTop() {
    var t;
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -20);
        t = setTimeout('backToTop()', 1);
    } else clearTimeout(t);
    return false;
}