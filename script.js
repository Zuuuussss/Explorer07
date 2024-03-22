//var//
const form = document.querySelector("form")
const inputweight = document.querySelector("#weight")
const inputheight = document.querySelector("#height")

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputweight.value
  const height = inputheight.value

  const result = IMC(weight, height)
  console.log(result)
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

