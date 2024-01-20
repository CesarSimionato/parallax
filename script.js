const effectScript = () => {
  const effect = document.querySelector("#effect")

  const effects = [
    "soft-light",
    "multiply",
    "saturation",
    "luminosity",
  ]

  let count = 1

  setInterval(() => {
    effect.removeAttribute("class")
    effect.classList.add("effect", effects[count])

    if (count + 1 === effects.length) {
      count = 0
    } else {
      count += 1
    }

  }, 10000)

}
effectScript()