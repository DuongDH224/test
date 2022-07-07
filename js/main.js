const buytBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container")
const modalClose = document.querySelector(".js-modal-close");
function showBuyTickets(e) {
    e.preventDefault();
    modal.classList.add("open");
}
function hideBuyTickets(e) {
    e.preventDefault();
    modal.classList.remove("open");
}
for(let item of buytBtns) {
    item.addEventListener("click", showBuyTickets);
}
modalClose.addEventListener("click", hideBuyTickets);
modal.addEventListener("click", hideBuyTickets);
modalContainer.addEventListener("click", function(event) {
    event.stopPropagation();
})