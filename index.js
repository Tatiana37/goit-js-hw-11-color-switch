const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]')
};

let colorId = null;

refs.startBtn.addEventListener('click', onClickStartChangeColor);
refs.stopBtn.addEventListener('click', onClickStopChangeColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBtnStatus = (remove, add) => {
  refs.startBtn.disabled = add;
  refs.stopBtn.disabled = remove;
};

function onClickStartChangeColor() {
  changeBtnStatus(false, true);
  refs.startBtn.classList.add("clicked");
  refs.stopBtn.classList.remove("clicked");


  colorId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 500);
};

function onClickStopChangeColor() {
  changeBtnStatus(true, false);
  clearInterval(colorId);
  refs.startBtn.classList.remove("clicked");
  refs.stopBtn.classList.add("clicked");
}
