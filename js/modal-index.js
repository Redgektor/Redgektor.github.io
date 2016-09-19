var linkLatter = document.querySelector(".map-button");
var linkMap = document.querySelector(".map");
var latter = document.querySelector(".modal-write-us");
var map = document.querySelector(".modal-content-map")
var closeLatter = document.getElementById(["latter-close"]);
var closeMap = document.getElementById(["map-close"]);
var closeMassege = document.getElementById(["massege-close"])  

linkLatter.addEventListener("click", function(event){
    event.preventDefault();
    latter.classList.add("modal-content-show");
});

linkMap.addEventListener("click", function(event){
    event.preventDefault();
    map.classList.add("modal-content-show");
});

closeLatter.addEventListener("click", function(event) {
    event.preventDefault();
    latter.classList.remove("modal-content-show");
});

closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.remove("modal-content-show");
});

// Модальное окно "Товар успешно добавлен в корзину"

var linkBuyArray = document.querySelectorAll(".buy-button");
var massege = document.querySelector(".modal-add-basket");
var closeMassege = document.querySelector(".continue");

for (var i = 0; i < linkBuyArray.length; i++) {
    linkBuyArray[i].addEventListener("click",  massegeShow)
}
function massegeShow(event) {
    event.preventDefault();
    massege.classList.add("modal-content-show");
}

closeMassege.addEventListener("click", function(event) {
    event.preventDefault();
    massege.classList.remove("modal-content-show");
});