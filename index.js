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

downloadButton.onclick = () => {
    domtoimage.toBlob(downloadMeme)
        .then(function (blob) {
            window.saveAs(blob, 'Your_Meme.png');
        })
}


// form  text/image button display none/block

const asideImage = document.getElementById("aside-image")
const asideText = document.getElementById("aside-text")
const buttonImage = document.getElementById("button-image")
const buttonText = document.getElementById("button-text")


const openAsideImage = () =>{
    asideImage.style.display = "block"
    asideText.style.display = "none"
}

buttonImage.onclick = openAsideImage

const openAsideText = () =>{
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


// Filters

const brightness = document.getElementById("brightness");
console.log(brightness)

const handleChange = (event) => {
    console.log(event.target.value)
}

brightness.addEventListener("change", handleChange)
// text aside

// edición de texto inferior y superior 

const toptxt = document.getElementById("toptxt");
const btmtxt = document.getElementById("btmtxt");

const txt1 = document.getElementById ("txt1");
const txt2 = document.getElementById ("txt2");


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
        if(topCheck.checked) {
           txt1.style.display = "none";
        } else {
        txt1.style.display = "flex";    }
    });

    btmCheck.addEventListener("click", () => {
        console.log(btmCheck.checked)
        if(btmCheck.checked) {
           txt2.style.display = "none";
        } else {
            txt2.style.display = "flex";    }
    });

// cambio de familia de fuente

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




