const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

const krest = document.querySelectorAll('.krest__inner');
const krestContent = document.querySelectorAll('.krest__content')
let click = 0
krest.forEach((item, i) => {
  item.addEventListener('click', () => {
    click += 1;
    krestContent.forEach((item, i) => {
      item.style.display = 'none'
    })
    if (click == 2) {
      krestContent[i].style.display = 'none';
      click = 0;
    } else {
      krestContent[i].style.display = 'block';
    }
  })
})

const imgCvet = document.querySelector('.svet__cvet');
const svetInner = document.querySelector('.svet__inner');
const svetInner2 = document.querySelector('.svet__inner2');
const resset = document.querySelector('.svet__cvet2');
const Cvet = document.querySelectorAll('.svet__changes-item');
const masina = document.querySelector('.cont');
const title = document.querySelector('.svet__tilte2');
const suptitle = document.querySelector('.svet__text')

imgCvet.addEventListener('click', () => {
  svetInner.style.display = 'none';
  svetInner2.style.display = 'block'

})
resset.addEventListener('click', () => {
  svetInner.style.display = 'block';
  svetInner2.style.display = 'none'
})
Cvet.forEach((item, i) => {
  item.addEventListener('click', () => {
    masina.innerHTML = `
    <img src="./img/0${i}.png" alt="" class="svet__img">`
    if (i > 0) {
      title.innerHTML = `Стандартные <span>цвета</span>`;
      suptitle.innerHTML = `Стандартные цвета кузова являются классикой PORSCHE и не трубуют дополнительных трат.`
    }
    if (i > 1) {
      title.innerHTML = `Металлические <span>цвета</span>`;
      suptitle.innerHTML = `Эксклюзивная линейка с металлическим отливом. Цвета придают свечение.`
    }
    if (i > 4) {
      title.innerHTML = `Специальные <span>цвета</span>`;
      suptitle.innerHTML = `Специальный набор цветов сделает ваше авто более ярким и заметным на дороге. Создавайте свой стиль.`
    }
  })
})

let interval;

const last_num = 31;
// число 97 определено из количества картинок в папке "img",
// если у вас 100 картинок, то надо поставить соотвествующее число

let current_num = 1;
const interval_time = 100;
// число 100 - интервал для смены картинок, можно скорость увеличить или уменьшить

const onFocusNext = () => {
  interval = setInterval(() => {
    current_num = +current_num + 1;
    // +4 позволяет автоматически пересчитывать номера картинок, у меня через 4,
    // если у вас номера идут по порядку: 1, 2, 3 и т.д., то надо ставить +1
    if (+current_num > last_num) {
      current_num = 1;
    }

    if (current_num < 10) {
      current_num = "0" + current_num;
      // если у вас номера картинок, как у меня имеют разное количество нулей перед номером,
      //  то нужны две предыдущие строки
    }
    console.log(`./img/mash/${current_num}.png`);
    document.getElementById(
      "slider_img"
    ).src = `./img/mash/${current_num}.png`;
  }, interval_time);
};
const onBlurNext = () => {
  clearInterval(interval);
};

const onFocusPrev = () => {
  interval = setInterval(() => {
    current_num = +current_num - 1;
    if (+current_num < 1) {
      current_num = 31;
    }

    if (current_num < 10) {
      current_num = "0" + current_num;
    }
    console.log(`./img/mash/${current_num}.png`);
    document.getElementById(
      "slider_img"
    ).src = `./img/mash/${current_num}.png`;
  }, interval_time);
};
const onBlurPrev = () => {
  clearInterval(interval);
};