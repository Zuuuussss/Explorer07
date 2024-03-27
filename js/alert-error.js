export const alerterror = {
  Element: document.querySelector(".alert-error"),
  open() {
    alerterror.Element.classList.add("open")
  },

  close() {
    alerterror.Element.classList.remove("open")
  },
}
