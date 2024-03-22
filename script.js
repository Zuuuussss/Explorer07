//var//
const form = document.querySelector("form")
const inputweight = document.querySelector("#weight")
const inputheight = document.querySelector("#height")

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputweight.value
  const height = inputheight.value

  console.log(weight, height)
}
