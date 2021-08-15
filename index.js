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


// Filter 

let brightnessFilter = 1;
let opacityFilter = 1;
let contrastFilter = 100;
let blurFilter = 0;
let grayscaleFilter = 0;
let sepiaFilter = 0;
let saturateFilter = 100;
let invertFilter = 0;
let hueFilter = 0;


const setFilter = (filter, value) => {

    if (filter === "brightness") {
        brightnessFilter = value;
    } else if (filter === "opacity") {
        opacityFilter = value;
    } else if (filter === "contrast") {
        contrastFilter = value;
    } else if (filter === "blur") {
        blurFilter = value;
    } else if (filter === "grayscale") {
        grayscaleFilter = value;
    } else if (filter === "sepia") {
        sepiaFilter = value;
    } else if (filter === "saturate") {
        saturateFilter = value;
    } else if (filter === "invert") {
        invertFilter = value;
    } else if (filter === "hue-rotate") {
        hueFilter = value;
    }

    return `brightness(${brightnessFilter}) opacity(${opacityFilter}) contrast(${contrastFilter}%) blur(${blurFilter}px) grayscale(${grayscaleFilter}%) sepia(${sepiaFilter}) saturate(${saturateFilter}%) invert(${invertFilter}) hue-rotate(${hueFilter}deg)`;
};


const inputs = document.querySelectorAll("input[type=range]");
console.log(inputs)
for(let i = 0; i < inputs.length; i ++)
    inputs[i].oninput = (event) => {
        imageContainer.style.filter = setFilter(inputs[i].id, event.target.value)
    }


