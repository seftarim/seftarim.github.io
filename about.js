let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".list");


document.onclick = function (e) {
  if (e.target == menuIcon) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
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
  },
  {
    text: 'We are farmer friends, who are we?'
  },
  {
    text: 'We are many years in the modern greenhouse sector and companies in the agricultural sector we worked as employees in 2022 we parted ways with companies and women entrepreneurs As we said that we are in this sector now. operating in the Aksu district of Antalya, the heart of we set up a company agricultural products modern greenhouse products We supply and manufacture. We are farmer friends, who are we?'
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
    aboutText.innerHTML = enText[7].text
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
        text:'Мы друзья-фермеры, кто мы?'
    },
    {
        text:'Нам много лет в современном тепличном секторе и компаниях аграрного сектора мы работали наемными работниками в 2022 году мы расстались с компаниями и женщинами-предпринимателями Как мы уже говорили, мы сейчас в этом секторе. работает в районе Аксу в Анталии, самом сердце мы создали компанию сельскохозяйственной продукции современные тепличные продукты Мы поставляем и производим. Мы друзья-фермеры, кто мы?'
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
    aboutText.innerHTML = ruText[7].text
})