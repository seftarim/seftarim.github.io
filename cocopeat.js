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
    src: './images/cocopeat/WhatsApp Image 2022-10-09 at 12.05.40 (1).jpeg'
  },
  {
    src: './images/cocopeat/WhatsApp Image 2022-10-09 at 12.05.40 (2).jpeg'
  },
  {
    src: './images/cocopeat/WhatsApp Image 2022-10-09 at 12.05.40 (3).jpeg'
  },
  {
    src: './images/cocopeat/WhatsApp Image 2022-10-09 at 12.05.40.jpeg'
  },
  {
    src: './images/cocopeat/WhatsApp Image 2022-10-09 at 12.05.41.jpeg'
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
let text7 = document.querySelector('.h1')
let text8 = document.querySelector('.p1')



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
  },
  {
    text: 'WHAT IS COCOPEAT?'
  },
  {
    text: 'Coconut (after removing the edible walnut part) It is an organic growing medium consisting of its outer shell. In addition to its woody structure, the outer shell is rich in fiber, It contains coarse to fine grained cocopeat (peat) and dust particles. The shell, which is crushed as a whole, is divided into coarse and fine pieces. rough part; consists of bark and fibers, it is called HUSK CHISP. Separated fine particles are sieved to remove dust. and COCOPEAT, also known as coconut peat. Cocopeat is one of the best known rooting and growing media. It is 100% organic and recyclable.'
  }
]


enButton.addEventListener('click', () => {
    text1.innerHTML = enText[0].text
    text2.innerHTML = enText[1].text
    text3.innerHTML = enText[2].text
    text4.innerHTML = enText[3].text
    text5.innerHTML = enText[4].text
    text6.innerHTML = enText[5].text
    text7.innerHTML = enText[6].text
    text8.innerHTML = enText[7].text
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
    {
      text: 'ЧТО ТАКОЕ КОКОПИТ?'
    },
    {
      text: 'Кокос (после удаления съедобной части грецкого ореха) Это органическая среда для выращивания, состоящая из внешней оболочки. Помимо своей древесной структуры, внешняя оболочка богата клетчаткой. Он содержит крупнозернистый и мелкозернистый кокосовый торф (торф) и частицы пыли. Скорлупа, которая измельчается целиком, делится на крупные и мелкие кусочки. грубая часть; состоит из коры и волокон, он называется HUSK CHISP. Отделенные мелкие частицы просеиваются для удаления пыли. и COCOPEAT, также известный как кокосовый торф. Cocopeat — одна из самых известных сред для укоренения и выращивания. Он на 100% органический и подлежит вторичной переработке.'
    }
]


ruButton.addEventListener('click', () => {
    text1.innerHTML = ruText[0].text
    text2.innerHTML = ruText[1].text
    text3.innerHTML = ruText[2].text
    text4.innerHTML = ruText[3].text
    text5.innerHTML = ruText[4].text
    text6.innerHTML = ruText[5].text
    text7.innerHTML = ruText[6].text
    text8.innerHTML = ruText[7].text
})