// dark & light mode

const darkMode = document.querySelector(".dark-mode")
const buttonMode = document.querySelector(".button-mode")
const lightMode = document.querySelector(".light-mode")
// const iconLight = document.getElementById("icon-Light")

buttonMode.onclick = () => {
    darkMode.classList.toggle("dark-mode")
    darkMode.classList.toggle("light-mode")

    if (darkMode.classList.contains("dark-mode")){
        buttonMode.textContent = "Light mode"
    }
    else{
        buttonMode.textContent = "Dark mode"
    }
}

// investigar cambio de icono

// iconLight.classList.remove = ("far fa-lightbulb")
// iconLight.classList.add = ("fas fa-lightbulb")

// dowload meme

const downloadMeme = document.getElementById("download-container");
const downloadButton = document.getElementById("download-button");


downloadButton.onclick = () => {
  domtoimage.toBlob(downloadMeme)
  .then(function (blob) {
      window.saveAs(blob, 'Your Meme.png');
  })
}
