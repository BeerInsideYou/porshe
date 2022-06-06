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