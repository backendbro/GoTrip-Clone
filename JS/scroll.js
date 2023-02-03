window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        
        document.querySelector(".header").style.background = "#051036";
    } else {
        document.querySelector(".header").style.background = "transparent";
    }
}