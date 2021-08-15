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



// dowload meme

const downloadMeme = document.getElementById("download-container");
const downloadButton = document.getElementById("download-button");
const loadingMeme = document.getElementById("loading-meme");

downloadButton.onclick = () => {
loadingMeme.style.display = "block";
domtoimage.toBlob(downloadMeme)
    .then(function (blob) {
        window.saveAs(blob, 'Your_Meme.png');
        loadingMeme.style.display = "none";
    })
}


// form  text/image button display none/block

const asideImage = document.getElementById("aside-image")
const asideText = document.getElementById("aside-text")
const buttonImage = document.getElementById("button-image")
const buttonText = document.getElementById("button-text")


const openAsideImage = () => {
asideImage.style.display = "block"
asideText.style.display = "none"
}

buttonImage.onclick = openAsideImage

const openAsideText = () => {
asideText.style.display = "block"
asideImage.style.display = "none"
}

buttonText.onclick = openAsideText



// Image Panel 

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
for (let i = 0; i < inputs.length; i++)
inputs[i].oninput = (event) => {
    imageContainer.style.filter = setFilter(inputs[i].id, event.target.value)
}



// text aside

// edición de texto inferior y superior 

const toptxt = document.getElementById("toptxt");
const btmtxt = document.getElementById("btmtxt");

const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");


toptxt.addEventListener("keyup", () => {
    txt1.innerHTML = toptxt.value;
});


btmtxt.addEventListener("keyup", () => {
    txt2.innerHTML = btmtxt.value;
});

// remoción de texto superior e inferior 

const topCheck = document.getElementById("top-check");
const btmCheck = document.getElementById("btm-check");


topCheck.addEventListener("click", () => {
    console.log(topCheck.checked)
    if (topCheck.checked) {
        txt1.style.display = "none";
    } else {
        txt1.style.display = "flex";
    }
});

btmCheck.addEventListener("click", () => {
    console.log(btmCheck.checked)
    if (btmCheck.checked) {
        txt2.style.display = "none";
    } else {
        txt2.style.display = "flex";
    }
});

// cambio de familia de fuente REVISAR, NO ANDA

const optionFont = document.getElementById("optionfont")

optionFont.addEventListener("change", () => {
txt1.style.fontFamily = '${optionFont.value}';
txt1.style.fontFamily = "Impact"; 

console.log(optionFont.value)  
});

// buttons textalign
            
const textAlignLeft = document.getElementById("textalign-left")
const textAlignCenter = document.getElementById("textalign-center")
const textAlignRight = document.getElementById("textalign-right")

textAlignLeft.onclick = () => {
txt1.style.justifyContent = "flex-start"
txt2.style.justifyContent = "flex-start"
}

textAlignCenter.onclick = () => {
txt1.style.justifyContent = "center"
txt2.style.justifyContent = "center"

}

textAlignRight.onclick = () => {
txt1.style.justifyContent = "flex-end"
txt2.style.justifyContent = "flex-end"
}

// color de texto de divs de texto 

const inputColorText = document.getElementById("font-color")

inputColorText.addEventListener('input', () =>{
txt1.style.color = inputColorText.value
txt2.style.color = inputColorText.value
})

// background color de divs de texto

const inputBackgroundColorText = document.getElementById("back-color")

inputBackgroundColorText.addEventListener('input', () =>{
    txt1.style.backgroundColor = inputBackgroundColorText.value
    txt2.style.backgroundColor = inputBackgroundColorText.value
})

// background image div principal
const backgroundColor = document.getElementById("input-color")
console.log(backgroundColor)
console.log(mainCenter)

backgroundColor.addEventListener('input', () =>{
    mainCenter.style.backgroundColor = backgroundColor.value
})





// button transparent

const inputCheckTransparent = document.getElementById("check-transparent")
inputCheckTransparent.addEventListener('change', () =>{

if ( inputCheckTransparent.checked == true ){
    txt1.style.backgroundColor = backgroundColor.value
    txt2.style.backgroundColor = backgroundColor.value
} 
else if ( inputCheckTransparent.checked == false){
    txt1.style.backgroundColor = inputBackgroundColorText.value
txt2.style.backgroundColor = inputBackgroundColorText.value

}
})


    
    

