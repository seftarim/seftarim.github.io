let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".list");

document.onclick = function (e) {
  if (e.target == menuIcon) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
};

let images = document.querySelector(".middle-images");
let backButton = document.querySelector(".buttonBack");
let nextButton = document.querySelector(".buttonNext");

const imageDoc = [
  {
    src: "./images/foto/1.jpeg",
  },
  {
    src: "./images/foto/2.jpeg",
  },
  {
    src: "./images/foto/3.jpeg",
  },
  {
    src: "./images/foto/4.jpeg",
  },
  {
    src: "./images/foto/5.jpeg",
  },
  {
    src: "./images/foto/6.jpeg",
  },
  {
    src: "./images/foto/7.jpeg",
  },
  {
    src: "./images/foto/8.jpeg",
  },
  {
    src: "./images/foto/9.jpeg"
  },
  {
    src: './images/foto/10.jpeg'
  },
  {
    src: './images/foto/11.jpeg'
  },
  {
    src: './images/foto/12.jpeg'
  },
  {
    src: './images/foto/13.jpeg'
  }
];

let count = 0;

function counts() {
  if (count < 0) {
    count = imageDoc.length - 1;
  } else if (count == imageDoc.length) {
    count = 0;
  }
  images.src = imageDoc[count].src;
}

backButton.onclick = () => {
  count--;
  counts();
};
nextButton.onclick = () => {
  count++;
  counts();
};

let enButton = document.querySelector(".en");
let ruButton = document.querySelector(".ru");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let text4 = document.querySelector(".text4");
let text5 = document.querySelector(".text5");
let text6 = document.querySelector(".text6");
let text7 = document.querySelector(".footer-text");

let enText = [
  {
    text: "Homepage",
  },
  {
    text: "About Us",
  },
  {
    text: "Contact",
  },
  {
    text: "Products",
  },
  {
    text: "Online Shop",
  },
  {
    text: "Cocopeat",
  },
  {
    text: "We are farmer friends, who are we?",
  },
];

enButton.addEventListener("click", () => {
  text1.innerHTML = enText[0].text;
  text2.innerHTML = enText[1].text;
  text3.innerHTML = enText[2].text;
  text4.innerHTML = enText[3].text;
  text5.innerHTML = enText[4].text;
  text6.innerHTML = enText[5].text;
  text7.innerHTML = enText[6].text;
});

let ruText = [
  {
    text: "домашняя страница",
  },
  {
    text: "о нас",
  },
  {
    text: "Контакт",
  },
  {
    text: "товары",
  },
  {
    text: "онлайн магазин",
  },
  {
    text: "Cocopeat",
  },
  {
    text: "Мы друзья-фермеры, кто мы?",
  },
];

ruButton.addEventListener("click", () => {
  text1.innerHTML = ruText[0].text;
  text2.innerHTML = ruText[1].text;
  text3.innerHTML = ruText[2].text;
  text4.innerHTML = ruText[3].text;
  text5.innerHTML = ruText[4].text;
  text6.innerHTML = ruText[5].text;
  text7.innerHTML = ruText[6].text;
});
