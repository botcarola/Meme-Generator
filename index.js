// dark mode

/* const lightMode = document.getElementById("light-mode");
const headerLight = document.getElementById("header-light")
const mainLight = document.getElementById("main-light")
const lightIcon = document.getElementById("light-icon")
const lightList = document.getElementById("light-list")
const lightModeText = document.getElementById("light-mode-txt")

lightMode.onclick = () => {
  headerLight.style.background = "#E0E0E0"
  headerLight.style.color = "#424242"
  mainLight.style.background = "#EEEEEE"
  lightIcon.style.color = "#424242"
}
 */


// dowload meme

const downloadMeme = document.getElementById("download-container");
const downloadButton = document.getElementById("download-button");


downloadButton.onclick = () => {
  domtoimage.toBlob(downloadMeme)
  .then(function (blob) {
      window.saveAs(blob, 'Your Meme.png');
  })
}
