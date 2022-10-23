const quotes = [
  {
    quote: "우리는 나이가 들면서 변하는 게 아니다. 보다 자기 다워지는 것이다",
    author: "린홀",
  },
  {
    quote: "게으르지 않음은 영원한 삶의 집이요, 게으름은 죽음의 집이다.",
    author: "",
  },
  {
    quote: "나는 날마다, 모든 면에서, 점점 더 좋아지고 있다.",
    author: "",
  },
  {
    quote: "인생에 뜻을 세우는데 적당한 때는 없다.",
    author: "볼드윈",
  },
  {
    quote: "실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안된다.",
    author: "하버트 개서",
  },
  {
    quote: "우리는 행복하기 때문에 웃는 게 아니라, 웃기 때문에 행복하다.",
    author: "윌리엄 제임스",
  },
  {
    quote: "너 자신이 되라. 다른 사람은 이미 있으니까.",
    author: "오스카 와일드",
  },
  {
    quote: "세상에 공짜는 없다.",
    author: "",
  },
  {
    quote: "또 후회한들 무엇하랴",
    author: "",
  },
  {
    quote: "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
    author: "찰리 채플린",
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
