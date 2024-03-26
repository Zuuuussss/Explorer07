//var//
const form = document.querySelector("form")
const inputweight = document.querySelector("#weight")
const inputheight = document.querySelector("#height")

const modal = {
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

form.onsubmit = (Event) => {
  Event.preventDefault()

  const weight = inputweight.value
  const height = inputheight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  modal.open()
}

modal.btnclose.onclick = () => {
  modal.close()
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
