// dark & light mode

const darkMode = document.querySelector(".dark-mode")
const buttonMode = document.querySelector(".button-mode")
const lightMode = document.querySelector(".light-mode")

// atencion al tabulado aqui. Todo lo que va dentro de llaves lleva margen. Asi:
// buttonMode.onclick = () => {
//     darkMode.classList.toggle("dark-mode")
//     darkMode.classList.toggle("light-mode")
    
//     if (darkMode.classList.contains("dark-mode")) {
//         buttonMode.textContent = "🌞 Light mode"
//     }
//     else {
//         buttonMode.textContent = "🌙 Dark mode"
//     }
// }
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
    .then((blob) => {
        window.saveAs(blob, 'Your_Meme.png');
        loadingMeme.style.display = "none";
    })
    .catch(() => {
        loadingMeme.style.display = "none";
    })
}

// form  text/image button display none/block
// Los nombres de los botones no son muy claros, a primera vista es dificil ver cual es 
// el del panel de desktop y cual es el de mobile. 

const asideImage = document.getElementById("aside-image")
const asideText = document.getElementById("aside-text")
const buttonImage = document.getElementById("button-image")
const buttonText = document.getElementById("button-text")

// Como estas dos funciones no se reutilizaran en ningun lado, mejor asignarlas derecho al onclick:
// buttonImage.onclick = () => {
//     asideImage.style.display = "block"
//     asideText.style.display = "none"
// }

// atencion al tabulado
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

// button close panel

const closeButtonImage = document.getElementById("button-panel-img")
const closeButtonText = document.getElementById("button-panel-text")

closeButtonImage.onclick = () => {
    asideImage.style.display = "none"
}

closeButtonText.onclick = () => {
    asideText.style.display = "none"
}

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
    // los parentesis son innecesarios aqui. Atencion al tabulado. 
mainCenter.style.backgroundColor = (inputColor.value)
colorHex.textContent = (inputColor.value)
}

//Mix Blend 

const mixBlend = document.getElementById("mix-blend"); //id de select 

mixBlend.onchange = () => {
// // atencion al tabulado
// Podriamos hacer esta funcion mas eficiente si los valores de mixBlend fueran ya lo que necesitamos. 
// O sea , en nuestro HTML escribimos:
/* <option value="ninguno" selected>None</option>
<option value="lighten">Bright</option>
<option value="darken">Darken</option>
<option value="difference">Difference</option>
<option value="luminosity">Luminosity</option>
<option value="multiply">Multiply</option> */
// Y eso nos permite que nuestra funcion quede super breve:

// mixBlend.onchange = () => {
//     imageContainer.style.mixBlendMode = mixBlend.value
// }


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
// que bien que resolvieron esto! amé la funcion!!!

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


const inputs = document.querySelectorAll(".filter-range");

for (let i = 0; i < inputs.length; i++)
inputs[i].oninput = (event) => {
imageContainer.style.filter = setFilter(inputs[i].id, event.target.value)
}

//Reset filter 

const brightness = document.getElementById("brightness");
const opacity = document.getElementById("opacity");
const contrast = document.getElementById("contrast");
const bluR = document.getElementById("blur");
const grayscale = document.getElementById("grayscale");
const sepia = document.getElementById("sepia");
const hueRotate = document.getElementById("hue-rotate");
const saturate = document.getElementById("saturate");
const invert = document.getElementById("invert");
const buttonRestored = document.querySelector(".button-restored");

buttonRestored.onclick = () => {
    brightness.value = 1;
    opacity.value = 1;
    contrast.value = 100;
    bluR.value = 0;
    grayscale.value = 0;
    sepia.value = 0;
    saturate.value = 100;
    invert.value = 0;
    hueRotate.value = 0;

    imageContainer.style.filter = "none";
}

// text aside

// edición de texto inferior y superior 

const toptxt = document.getElementById("toptxt");
const btmtxt = document.getElementById("btmtxt");

const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");

// atencion al tabulado
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
if (topCheck.checked) {
    txt1.style.display = "none";
} else {
    txt1.style.display = "flex";
}
});

btmCheck.addEventListener("click", () => {
if (btmCheck.checked) {
    txt2.style.display = "none";
} else {
    txt2.style.display = "flex";
}
});

// cambio de familia de fuente 

const optionFont = document.getElementById("optionfont")

optionFont.addEventListener('change', () =>{
    // Esta funcion no esta mal, todo lo contrario! Lo resolvieron super bien.
    // Pero quiero comentarles que si le hubieran dado el "value" al select
    // con el nombre final de la tipografia, habria sido mucho mas sencillo. 
    // Por ejemplo, en el select escribimos:

    // <option value="Arial, Helvetica, sans-serif">Arial</option>
    // <option value="Montserrat">Montserrat</option>
    // <option value="American Typewriter">American Typewriter</option>
    // <option value="monospace">Monospace</option>
    // <option value="Comic Sans MS" selected>Comic Sans MS</option>
    // <option value="Comic Neue">Comic Neue</option>
    // <option value="Impact">Impact</option>
    // <option value="Verdana">Verdana</option>
    // <option value="DotGothic16">Dot Gothic</option>   
    
    // y con ese cambio en html, ahora nuestra funcion puede ser asi de sencilla:
// optionFont.addEventListener('change', () =>{
//     txt1.style.fontFamily = optionFont.value
//     txt2.style.fontFamily = optionFont.value
// }

if ( optionFont.value === "Arial"){
    txt1.style.fontFamily = "Arial, Helvetica, sans-serif"
    txt2.style.fontFamily = "Arial, Helvetica, sans-serif"
}
else if ( optionFont.value === "Montserrat"){
    txt1.style.fontFamily = "Montserrat"
    txt2.style.fontFamily = "Montserrat"       
}
else if (optionFont.value === "American" ) {
    txt1.style.fontFamily = "American Typewriter"
    txt2.style.fontFamily = "American Typewriter"
}
else if (optionFont.value === "Monospace" ) {
    txt1.style.fontFamily = "monospace"
    txt2.style.fontFamily = "monospace"
}
else if (optionFont.value === "Comic Sans MS" ) {
    txt1.style.fontFamily = "Comic Sans MS"
    txt2.style.fontFamily = "Comic Sans MS"
}
else if (optionFont.value === "Comic Neue" ) {
    txt1.style.fontFamily = "Comic Neue"
    txt2.style.fontFamily = "Comic Neue"
}
else if (optionFont.value === "Impact" ) {
    txt1.style.fontFamily = "Impact"
    txt2.style.fontFamily = "Impact"
}
else if (optionFont.value === "Verdana" ) {
    txt1.style.fontFamily = "Verdana"
    txt2.style.fontFamily = "Verdana"
}
else if (optionFont.value === "DGothic" ) {
    txt1.style.fontFamily = "DotGothic16"
    txt2.style.fontFamily = "DotGothic16"
}
})

// tamaño de fuente

const inputNumberFont = document.getElementById("number")
// dejen un espacio entre la flecha y la llave: => {
inputNumberFont.oninput = () =>{
    txt1.style.fontSize = `${inputNumberFont.value}px` 
    txt2.style.fontSize = `${inputNumberFont.value}px`
}

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

backgroundColor.addEventListener('input', () =>{
mainCenter.style.backgroundColor = backgroundColor.value
})

// button transparent

const inputCheckTransparent = document.getElementById("check-transparent")
inputCheckTransparent.addEventListener('change', () =>{

    // ojo con el tabulado
    // no es necesario hacer comparaciones contra true o false. 
    // esto es lo mismo:
    // if (inputCheckTransparent.checked) {
    //     txt1.style.backgroundColor = backgroundColor.value
    //     txt2.style.backgroundColor = backgroundColor.value
    // } 
    // else {
    //     txt1.style.backgroundColor = inputBackgroundColorText.value
    //     txt2.style.backgroundColor = inputBackgroundColorText.value
    // }
if ( inputCheckTransparent.checked == true ){
txt1.style.backgroundColor = backgroundColor.value
txt2.style.backgroundColor = backgroundColor.value
} 
else if ( inputCheckTransparent.checked == false){
txt1.style.backgroundColor = inputBackgroundColorText.value
txt2.style.backgroundColor = inputBackgroundColorText.value
}
})

inputCheckTransparent.addEventListener('change', () =>{
// misma observacion que antes sobre comparaciones con booleanos
if ( inputCheckTransparent.checked == true ){
txt1.style.backgroundColor = "transparent"   
txt2.style.backgroundColor = "transparent"     
} 
else if ( inputCheckTransparent.checked == false){
txt1.style.backgroundColor = "white"
txt2.style.backgroundColor = "white"    
}
})

// button outline

const buttonNone = document.getElementById("button1")
const buttonLight = document.getElementById("button2")
const buttonDark = document.getElementById("button3")

buttonNone.onclick = () =>{
txt1.style.textShadow = "none"
txt2.style.textShadow = "none"
}

buttonLight.onclick = () =>{
txt1.style.textShadow = "2px 2px 4px #FFFFFF"
txt2.style.textShadow = "2px 2px 4px #FFFFFF"
}

buttonDark.onclick = () =>{
txt1.style.textShadow = "2px 2px 2px #000000"
txt2.style.textShadow = "2px 2px 2px #000000"
}

// button espaciado

const inputNumberSpacing = document.getElementById("number-spacing");

inputNumberSpacing.oninput = () =>{
    txt1.style.height = `${inputNumberSpacing.value * 2}px`;
    txt1.style.marginBottom = `-${inputNumberSpacing.value * 2}px`;
    txt2.style.height = `${inputNumberSpacing.value * 2}px`;
    txt2.style.marginTop = `-${inputNumberSpacing.value * 2}px`;
}

//select line spacing

const inputSelectLineSpacing = document.getElementById("line-spacing");

inputSelectLineSpacing.oninput = () => {
    txt1.style.lineHeight = inputSelectLineSpacing.value;
    txt2.style.lineHeight = inputSelectLineSpacing.value;
}