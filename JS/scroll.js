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

$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});
});	

var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}



      
    
    let imgWrapper1 = document.getElementById("name-0"),
        imgWrapper2 = document.getElementById('name-1'),
        imgWrapper3 = document.getElementById('name-2'),
        imgWrapper4 = document.getElementById('name-3'),
        imgWrapper5 = document.getElementById('name-4')
    

        ///// 1  ///////
        
    imgWrapper1.addEventListener("mouseover", (e) => {  
    imgWrapper1.childNodes[5].style.opacity = 0
    e.preventDefault()
  })

  imgWrapper1.addEventListener("mouseout", (e) => {  
    imgWrapper1.childNodes[5].style.opacity = 1
    e.preventDefault()
  })


  //////  2 ////////

  imgWrapper2.addEventListener("mouseover", (e) => {  
    imgWrapper2.childNodes[5].style.opacity = 0
    e.preventDefault()
  })

  imgWrapper2.addEventListener("mouseout", (e) => {  
    imgWrapper2.childNodes[5].style.opacity = 1
    e.preventDefault()
  })


  ////  3 ////////

  imgWrapper3.addEventListener("mouseover", (e) => {  
    imgWrapper3.childNodes[1].childNodes[5].style.opacity = 0
    e.preventDefault()
  })

  imgWrapper3.addEventListener("mouseout", (e) => {  
    imgWrapper3.childNodes[1].childNodes[5].style.opacity = 1
    e.preventDefault()
  })


  ////  4 ////////

  imgWrapper4.addEventListener("mouseover", (e) => {  
    imgWrapper4.childNodes[1].childNodes[5].style.opacity = 0
    e.preventDefault()
  })

  imgWrapper4.addEventListener("mouseout", (e) => {  
    imgWrapper4.childNodes[1].childNodes[5].style.opacity = 1
    e.preventDefault()
  })




  const carouselLeft = document.querySelector('.carousel-indicators')

  const carouselPrevBtn = document.querySelector('.carousel-control-prev')
  const carouselNextBtn = document.querySelector('.carousel-control-next')

  carouselPrevBtn.addEventListener('click', (e) => {
    carouselLeft.style.transition =  "1.8s all ease-in-out";
    carouselLeft.style.justifyContent = "flex-start"
    e.preventDefault()
  })


  carouselNextBtn.addEventListener('click', (e) => {
    carouselLeft.style.transition =  "1.8s all ease-in-out";
  carouselLeft.style.justifyContent = "flex-end"
    e.preventDefault()
  })  


