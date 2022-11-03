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

const randomImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${randomImage}`;

document.body.appendChild(backgroundImage);
