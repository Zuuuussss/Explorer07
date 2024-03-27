import { modal } from "./modal.js"
import { alerterror } from "./alert-error.js"
import { IMC, notNumber } from "./utils.js"

const form = document.querySelector("form")
const inputweight = document.querySelector("#weight")
const inputheight = document.querySelector("#height")

form.onsubmit = (Event) => {
  Event.preventDefault()

  const weight = inputweight.value
  const height = inputheight.value

  const showalerterror = notNumber(weight) || notNumber(height)

  if (showalerterror) {
    alerterror.open()
    return
  }

  alerterror.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  modal.open()
}

inputweight.oninput = () => alerterror.close()
inputheight.oninput = () => alerterror.close()
