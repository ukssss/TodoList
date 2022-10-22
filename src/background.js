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

const images = [
  "bing-hao-_wqj9tC0WSE-unsplash.jpg",
  "jonathan-roger-LY1eyQMFeyo-unsplash.jpg",
  "kevin-young--icmOdYWXuQ-unsplash.jpg",
  "olivia-bliss-HTnycx0h_kk-unsplash.jpg",
  "patrick-tomasso-SVVTZtTGyaU-unsplash.jpg",
  "ping-onganankun-5htrsUUbFGI-unsplash.jpg",
  "piotr-chrobot-6oUsyeYXgTg-unsplash.jpg",
  "ryo-yoshitake-rD28m9BmXVs-unsplash.jpg",
  "thomas-habr-6NmnrAJPq7M-unsplash.jpg",
  "yohan-cho-Mwvhyd22Lyw-unsplash.jpg",
];

// const first = colors[Math.floor(Math.random() * colors.length)];
// const second = colors[Math.floor(Math.random() * colors.length)];
// const third = colors[Math.floor(Math.random() * colors.length)];
// const deg = Math.floor(Math.random() * 180);
// document.body.style.background = `linear-gradient(to left ,${first}, ${second})`;

const randomImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${randomImage}`;

document.body.appendChild(backgroundImage);
