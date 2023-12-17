var btn = document.querySelector(".btn")

var around = document.querySelector(".around")





btn.addEventListener('click', animation);



function animation() {


  around.style.transform = 'scale(2)';  // around div elementinin ölçüsünü iki dəfə artır

  setTimeout(function() {
    around.style.transform = 'scale(1)';              //// 1300 millisaniyə (1.3 saniyə) sonra around div elementinin ölçüsünü orijinal həddinə qaytarır
  }, 1300);
}