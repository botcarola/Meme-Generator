// dark & light mode

const darkMode = document.querySelector(".dark-mode")
const buttonMode = document.querySelector(".button-mode")
const lightMode = document.querySelector(".light-mode")

buttonMode.onclick = () => {
    darkMode.classList.toggle("dark-mode")
    darkMode.classList.toggle("light-mode")

    if (darkMode.classList.contains("dark-mode")) {
        buttonMode.textContent = "🌞 Light mode"
    }
    else {
        buttonMode.textContent = "🌙 Dark mode"
    }
}

/* aside */

// dowload meme

const downloadMeme = document.getElementById("download-container");
const downloadButton = document.getElementById("download-button");

downloadButton.onclick = () => {
    domtoimage.toBlob(downloadMeme)
        .then(function (blob) {
            window.saveAs(blob, 'Your_Meme.png');
        })
}


// Image Panel 

const inputUrl = document.getElementById("input-url");
const imageContainer = document.getElementById("image-container");

inputUrl.oninput = () => {
    imageContainer.src = inputUrl.value
}



// Filters

const brightness = document.getElementById("brightness");
console.log(brightness)

const handleChange = (event) => {
    console.log(event.target.value)
}

brightness.addEventListener("change", handleChange)
