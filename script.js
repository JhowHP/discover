function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagt light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // fazer a alteração da mensagem caso quebre a IMG

  const alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "Imagem de Jonnathan, na praia, para o Light mode")
  } else {
    alt.setAttribute(
      "alt",
      "Imagem de Jonnahtan com camisa da Loud, para o Dark mode"
    )
  }
}
