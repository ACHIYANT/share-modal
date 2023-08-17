let modal = document.querySelector(".modal");
let modalClassList = modal.classList;

let overlay = document.querySelector(".overlay");
let overlayClassList = overlay.classList;

function closeModal() {
  modalClassList.remove("active");
  overlayClassList.remove("overlayactive");
}
function openModal() {
  modalClassList.add("active");
  overlayClassList.add("overlayactive");
}
