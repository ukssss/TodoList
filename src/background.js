const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const first = colors[Math.floor(Math.random() * colors.length)];
const second = colors[Math.floor(Math.random() * colors.length)];
const third = colors[Math.floor(Math.random() * colors.length)];
const deg = Math.floor(Math.random() * 180);

console.log(first, second, third, deg);

document.body.style.background = `linear-gradient(to left ,${first}, ${second})`;
