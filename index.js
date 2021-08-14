// dark & light mode

const darkMode = document.querySelector(".dark-mode")
const buttonMode = document.querySelector(".button-mode")
const lightMode = document.querySelector(".light-mode")

buttonMode.onclick = () => {
    darkMode.classList.toggle("dark-mode")
    darkMode.classList.toggle("light-mode")

    if (darkMode.classList.contains("dark-mode")){
        buttonMode.textContent = "🌞 Light mode"
    }
    else{
        buttonMode.textContent = "🌙 Dark mode"
    }
}

// dowload meme

const downloadMeme = document.getElementById("download-container");
const downloadButton = document.getElementById("download-button");

downloadButton.onclick = () => {
  domtoimage.toBlob(downloadMeme)
  .then(function (blob) {
      window.saveAs(blob, 'Your Meme.png');
  })
}

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
        txt1.style.display = "block";    }
    });

    btmCheck.addEventListener("click", () => {
        console.log(btmCheck.checked)
        if(btmCheck.checked) {
           txt2.style.display = "none";
        } else {
            txt2.style.display = "block";    }
    });

// cambio de familia de fuente

const optionFont = document.getElementById("optionfont")

optionFont.addEventListener("change", () => {
    txt1.style.fontFamily = '${optionFont.value}';
    txt1.style.fontFamily = "Impact"; 

    console.log(optionFont.value)  
});

             




// ASIDE IMAGE

const asideImage = document.getElementById("aside-image")
