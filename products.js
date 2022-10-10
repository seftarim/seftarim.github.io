let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".list");


document.onclick = function (e) {
  if (e.target == menuIcon) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
};


let productsImages = document.querySelector('.productsImages')
let back = document.querySelector('.back')
let next = document.querySelector('.next')
let count = 0;


let products = [
  {
    src: './images/katalog/SEF TARIM KATALOG-1.png'
  },
  {
    src: './images/katalog/SEF TARIM KATALOG-2.png'
  },
  {
    src: './images/katalog/SEF TARIM KATALOG-3.png'
  },
  {
    src: './images/katalog/SEF TARIM KATALOG-4.png'
  },
  {
    src: './images/katalog/SEF TARIM KATALOG-5.png'
  }
]

function productsCount() {
  if (count < 0) {
    count = products.length - 1;
  } else if (count == products.length) {
    count = 0;
  }
    productsImages.src = products[count].src
}

back.onclick = () => {
  count--;
  productsCount();
};
next.onclick = () => {
  count++;
  productsCount();
};


let enButton = document.querySelector('.en')
let ruButton = document.querySelector('.ru')
let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2')
let text3 = document.querySelector('.text3')
let text4 = document.querySelector('.text4')
let text5 = document.querySelector('.text5')
let text6 = document.querySelector('.text6')
let text7 = document.querySelector('.footer-text')
let aboutText = document.querySelector('.about-text')



let enText = [
  {
    text: 'Homepage'
  },
  {
    text: 'About Us'
  },
  {
    text: 'Contact'
  },
  {
    text: 'Products'
  },
  {
    text: 'Online Shop'
  },
  {
    text: 'Cocopeat'
  }
]


enButton.addEventListener('click', () => {
    text1.innerHTML = enText[0].text
    text2.innerHTML = enText[1].text
    text3.innerHTML = enText[2].text
    text4.innerHTML = enText[3].text
    text5.innerHTML = enText[4].text
    text6.innerHTML = enText[5].text
})


let ruText = [
    {
        text:'домашняя страница'
    },
    {
        text:'о нас'
    },
    {
        text:'Контакт'
    },
    {
        text:'товары'
    },
    {
        text:'онлайн магазин'
    },
    {
        text:'Cocopeat'
    },
]


ruButton.addEventListener('click', () => {
    text1.innerHTML = ruText[0].text
    text2.innerHTML = ruText[1].text
    text3.innerHTML = ruText[2].text
    text4.innerHTML = ruText[3].text
    text5.innerHTML = ruText[4].text
    text6.innerHTML = ruText[5].text
})