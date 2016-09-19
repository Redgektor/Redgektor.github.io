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