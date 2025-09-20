const quotes = [
  {
    quote: "불평도 말고, 해명도 하지 마라. 자신을 방어하려는 유혹을 이겨내라.",
    author: "Brian Tracy",
  },
  {
    quote: "성공한 사람은 항상 다른 사람을 도울 기회를 찾고, 성공하지 못하는 사람은 ‘나한테 이득이 뭐냐?' 고 묻는다.",
    author: "Brian Tracy",
  },
  {
    quote: "당신에게 일어나는 일을 통제할 수는 없지만, 일어나는 일에 대한 태도는 통제할 수 있고, 그것으로 변화를 통제하게 된다.",
    author: "Brian Tracy",
  },
  {
    quote: "어디에서 왔는지는 중요하지 않다. 중요한 것은 당신이 어디로 가고 있느냐이다.",
    author: "Brian Tracy",
  },
  {
    quote: "긍정적인 기대를 하는 태도는 훌륭한 인격을 가진 사람의 대표적인 특징이다.",
    author: "Brian Tracy",
  },
  {
    quote: "평생 학습에 헌신하라. 가장 가치 있는 자산은 당신의 마음과 그 안에 담긴 것이다.",
    author: "Brian Tracy",
  },
  {
    quote: "안전지대에서 벗어나라. 성장하려면 불편함도 감수할 준비가 되어있어야 한다.",
    author: "Brian Tracy",
  },
  {
    quote: "성공의 열쇠는 두려움이 아니라 당신이 원하는 것에 의식을 집중하는 것이다.",
    author: "Brian Tracy",
  },
  {
    quote: "당신의 가장 큰 자산은 당신의 수입 능력이며, 가장 큰 자원은 시간이다.",
    author: "Brian Tracy",
  },
  {
    quote: "모든 성공한 사람은 거대한 꿈을 꾸는 사람이다. 그들은 미래를 이상적으로 상상하고, 매일 그 비전을 향해 나아간다.",
    author: "Brian Tracy",
  },
  {
    quote: "사랑은 나눌수록 자란다. 더 주면 나에게 더 돌아온다.",
    author: "Brian Tracy",
  },
  {
    quote: "감사의 태도를 기르고, 일어나는 모든 일을 감사하라. 모든 걸음이 더 나은 무언가를 향한 전진이다.",
    author: "Brian Tracy",
  },
  {
    quote: "행운은 예측 가능하다. 더 운을 원한다면, 기회를 더 많이 만들고, 더 적극적이고, 더 자주 나타나라.",
    author: "Brian Tracy",
  },
  {
    quote: "첫걸음을 내딛는 행동이 승자를 패자와 차별짓는다.",
    author: "Brian Tracy",
  },
  {
    quote: "당신이 하는 모든 일은 욕망이나 두려움이라는 감정에서 비롯된다.",
    author: "Brian Tracy",
  },
  {
    quote: "당신 능력의 진정한 한계는 당신이 얼마나 그것을 원하느냐에 달렸다.",
    author: "Brian Tracy",
  },
  {
    quote: "감정을 담고 믿는 것이 곧 당신의 현실이 된다.",
    author: "Brian Tracy",
  },
  {
    quote: "삶이 예상치 못한 시련을 주더라도, 지금 당신 안에는 그것을 처리할 수 있는 모든 것이 있다.",
    author: "Brian Tracy",
  },
  {
    quote: "단기적인 만족을 미루고 장기적인 보상을 선택하는 자기 절제가 성공의 필수 조건이다.",
    author: "Brian Tracy",
  },
  {
    quote: "항상 미래를 선택하라. 우리는 지금 무엇을 할 것인가?",
    author: "Brian Tracy",
  },
  {
    quote: "성공은 습관이다. 성공한 사람은 단지 성공 습관을 가진 사람일 뿐이다.",
    author: "Brian Tracy",
  },
  {
    quote: "커뮤니케이션은 배우는 기술이다. 자전거 타기처럼, 연습하면 삶의 모든 부분의 질을 빠르게 향상시킬 수 있다.",
    author: "Brian Tracy",
  },
  {
    quote: "결단력은 높은 성과를 내는 사람의 특징이다. 어떤 결정이든 하지 않는 것보다 나은 경우가 많다.",
    author: "Brian Tracy",
  }
];


const quote = document.querySelector("#quote .quote-text");
const author = document.querySelector("#quote .quote-author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;