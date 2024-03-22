//var//
const form = document.querySelector("form")
const inputweight = document.querySelector("#weight")
const inputheight = document.querySelector("#height")

const modalwrapper = document.querySelector(".modal-wrapper")
const modalmessage = document.querySelector(".modal .tittle span")
const modalbtnclose = document.querySelector(".modal button.close")

const modal = {
  open() {
    modalwrapper.classList.add("open")
  },
  close() {
    modalwrapper.classList.remove("open")
  },
}

form.onsubmit = (Event) => {
  Event.preventDefault()

  const weight = inputweight.value
  const height = inputheight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modalmessage.innerText = message
  modal.open()
}

modalbtnclose.onclick = () => {
  modal.close()
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
