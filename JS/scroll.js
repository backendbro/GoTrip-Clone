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



  // const imgWrapper = document.getElementById("name");
  //   imgWrapper.addEventListener("mouseover", (e) => {  
  //   const imgWrapperChildNodes = imgWrapper.childNodes

  //   const fadeInBtn = imgWrapperChildNodes[7].style.color = "blue"
  //   const fadeInText = imgWrapperChildNodes[5].style.color = "red" 


  //   // fadeInBtn.style.color = "red"
  //   console.log()
  //   e.preventDefault()
   
  // })


  // imgWrapper.addEventListener("mouseout", (e) => {
  //   const imgWrapperChildNodes = imgWrapper.childNodes

  //   const fadeInBtn = imgWrapperChildNodes[7].style.color = "blue"
  //   const fadeInText = imgWrapperChildNodes[5].style.color = "white" 
  
  
  //   // fadeInBtn.style.color = "red"
  //   console.log()
  //   e.preventDefault()
      
  // })

