const images = ["001.jpg", "002.jpg", "003.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// html element 만들기
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//body에 html 추가 append: 가장 뒤에 추가, prepend: 가장 앞에 추가
document.body.appendChild(bgImage);