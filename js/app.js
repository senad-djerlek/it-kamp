const glavniDiv = document.querySelector("#pocetak");
const body = document.querySelector("body");

const paragraf = document.createElement("p");
paragraf.textContent = "Ovo je paragraf p dodat iz JS";

glavniDiv.classList.add("kocka"); //dodavanje klase

paragraf.classList.add("text");

const dugme = document.createElement("button");

dugme.textContent = "Click me";

glavniDiv.appendChild(dugme);

const onButtonClick = () => {
    paragraf.classList.toggle("veci-font");
    skriveniDiv.classList.toggle("nevidljivo")
};


// paragraf.classList.toggle("veci-font")

const skriveniDiv = document.createElement("div");
skriveniDiv.classList.add("drugakocka");
body.append(skriveniDiv);

dugme.addEventListener("click",onButtonClick);






glavniDiv.append(paragraf);

console.log(glavniDiv);
//document.getElementById()
//document.getElementByClassName()
//document.querySelector()
//document.querySelectorAll()
//document.getElementByTagName()
//traversy media