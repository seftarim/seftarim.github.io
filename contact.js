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
let middleText = document.querySelector('.text')



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
    text: 'to reach...'
  }
]


enButton.addEventListener('click', () => {
    text1.innerHTML = enText[0].text
    text2.innerHTML = enText[1].text
    text3.innerHTML = enText[2].text
    text4.innerHTML = enText[3].text
    text5.innerHTML = enText[4].text
    text6.innerHTML = enText[5].text
    middleText.innerHTML = enText[6].text
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
    text: 'достигнуть...'
  }
]


ruButton.addEventListener('click', () => {
text1.innerHTML = ruText[0].text
text2.innerHTML = ruText[1].text
text3.innerHTML = ruText[2].text
text4.innerHTML = ruText[3].text
text5.innerHTML = ruText[4].text
text6.innerHTML = ruText[5].text
middleText.innerHTML = ruText[6].text
})