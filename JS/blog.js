const activeBtn = document.getElementById('active')
document.addEventListener('DOMContentLoaded', function () { 
    activeBtn.style.color = "white"
    activeBtn.style.display = "inline-block"
    activeBtn.style.width = "40px"
    activeBtn.style.height = "40px"
    activeBtn.style.borderRadius = "100%"
    activeBtn.style.backgroundColor = "#051036"
    activeBtn.style.marginRight = "10px"
    activeBtn.style.display = "inline-block"
})

AOS.init({
    duration: 3000,
    once: true
});