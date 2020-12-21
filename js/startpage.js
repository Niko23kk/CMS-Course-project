$("#openNav").click(function() {
    $(".page").addClass("swipe-lft");
    $(".nav").addClass("open");

    document.querySelector('body').style.opacity = 0
    setTimeout(function() {
        window.location.href = "page/main.html"
    }, 1000)
});


document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})