export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .tittle span"),
  btnclose: document.querySelector(".modal button.close"),

  open() {
    modal.wrapper.classList.add("open")
  },
  close() {
    modal.wrapper.classList.remove("open")
  },
}

modal.btnclose.onclick = () => {
  modal.close()
}

window.addEventListener("keydown", handlekeydown)
function handlekeydown(Event) {
  if (Event.key === "Escape") {
    modal.close()
  }
}
