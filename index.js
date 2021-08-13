// Dark & Light mode

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

// Download Meme

const downloadMeme = document.getElementById("download-container");
const downloadButton = document.getElementById("download-button");

downloadButton.onclick = () => {
    domtoimage.toBlob(downloadMeme)
        .then(function (blob) {
            window.saveAs(blob, 'Your_Meme.png');
        })
}


// Image URL Panel 

const inputUrl = document.getElementById("input-url");
const imageContainer = document.getElementById("image-container");

inputUrl.oninput = () => {
    imageContainer.src = inputUrl.value
}

//HEX change image panel

const mainCenter = document.getElementById("main-center");
const inputColor = document.getElementById("input-color");
const colorHex = document.getElementById("color-hex"); 

inputColor.oninput = () => {
    mainCenter.style.backgroundColor = (inputColor.value)
    colorHex.textContent = (inputColor.value)
} 

//Mix Blend 

const mixBlend = document.getElementById("mix-blend"); //id de select 

mixBlend.onchange = () => {

    if (mixBlend.value === "aclarar") {
        imageContainer.style.mixBlendMode = "lighten"
    } 
    else if (mixBlend.value === "oscurecer") {
        imageContainer.style.mixBlendMode = "darken"
    }     
    else if (mixBlend.value === "diferencia") {
        imageContainer.style.mixBlendMode = "difference"
    }
    else if (mixBlend.value === "luminosidad") {
        imageContainer.style.mixBlendMode = "luminosity"
    }
    else if (mixBlend.value === "multiplicar") {
        imageContainer.style.mixBlendMode = "multiply"
    } 
    else {
        imageContainer.style.mixBlendMode = ""
    }
}
 

/* const mixBlend = document.getElementById("mix-blend");
mixBlend.addEventListener("change", () =>{
    mainCenter.style.backgroundBlendMode = mixBlend.value
});  */

// Filters

const brightness = document.getElementById("brightness");
console.log(brightness)

const handleChange = (event) => {
    console.log(event.target.value)
}

brightness.addEventListener("change", handleChange)