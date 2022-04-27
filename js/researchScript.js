const articles = [
  {
    id: 1,
    imgUrl: "./img/researches/image1.png",
    title: "Преимущества для здоровья жирных кислот омега-3",
    text: "Борется с депрессией и тревогой.Существует три типа жирных кислот омега-3 : ALA, EPA и DHA. Из этих трех EPA, лучше всех борется с депрессией. Исследование показало, что EPA столь же эффективен против депрессии, как и обычный антидепрессант...",
    link: "./reasearchesHtmls/omega3Article.html",
  },
  {
    id: 2,
    imgUrl: "./img/researches/image2.png",
    title: "Могут ли витамины и добавки исправить седину? могут!",
    text: "Определенные витамины и минералы помогают гарантировать, что ваши волосяные фолликулы вырабатывают пигменты (меланин), которые необходимы волосам для сохранения естественного цвета...",
    link: "./reasearchesHtmls/greyHair.html",
  },
  {
    id: 3,
    imgUrl: "./img/researches/image3.png",
    title: "ПРОТИВОГРИБКОВЫЙ ПРОТОКОЛ:стоп КАНДИДА",
    text: "Candida albicans - грибок, вызывающий вагинальные дрожжевые инфекции, может размножаться в кишечнике, что приводит к множеству неприятных симптомов и потенциально увеличивает риск заболеваний и аутоиммунных состояний...",
    link: "./reasearchesHtmls/stopCandida.html",
  },
  {
    id: 4,
    imgUrl: "./img/researches/image4.png",
    title:
      "ЛУЧШИЕ пищевые добавки 2021 года по версии Better Nutrition Awards ",
    text: "Борется с депрессией и тревогой.Существует три типа жирных кислот омега-3 : ALA, EPA и DHA. Из этих трех EPA, лучше всех борется с депрессией. Исследование показало, что EPA столь же эффективен против депрессии, как и обычный антидепрессант...",
    link: "./reasearchesHtmls/betterNutritionAwards2021.html",
  },
  {
    id: 5,
    imgUrl: "./img/researches/image5.jpeg",
    title: " ВИТАМИН К2, ЧТО НУЖНО ЗНАТЬ ",
    text: " Может помочь предотвратить сердечные заболевания. Накопление кальция в артериях вокруг сердца является огромным фактором риска сердечных заболеваний...",
    link: "./reasearchesHtmls/vitaminK2.html",
  },
  {
    id: 6,
    imgUrl: "./img/researches/image6.png",
    title: " 6 лучших доказательных добавок от мозгового тумана ",
    text: "«Мозговой туман» сам по себе не является заболеванием, но относится к группе симптомов...",
    link: "./reasearchesHtmls/additivesForBrains.html",
  },
  {
    id: 7,
    imgUrl: "./img/researches/image7.png",
    title:
      "​​АСТАКСАНТИН, КОТОРЫЙ ОДОБРЕН И ПРОШЁЛ ПРОВЕРКУ НЕЗависимой лаборатории США ",
    text: " Лучший природный астаксантин",
    link: "./reasearchesHtmls/astacsantin.html",
  },
];
const createCardContent = (object) => {
  const {title, imgUrl, text, link, id} = object;
    const card = ` <div class="reviewWrapper researchWrapper">
    <a href="${link}" class="reviewPhoto"><img src="${imgUrl}" height="250" width="270"></a>
    <a href="${link}" class="reviewTitle">${title}</a>
    <div class="reviewText">${text}</div><a class="reviewLink" href="${link}">Читать статью >>></a> </div>`;
    return card;
};
const researchContent = document.getElementById("researchContent")

const generateContent = (array) => {

  researchContent.innerHTML = '';

  let data = '';

  array.forEach((element) => {
    data += createCardContent(element);
  });

  if (!data) data = 'No data';

  researchContent.innerHTML = data;
};
generateContent(articles);

const menu = document.getElementById("topNav");
const showMenu = document.getElementById("btnShowMenu");
const hideMenu = document.getElementById("btnHideMenu");
showMenu.addEventListener("click",()=>{
menu.style.display = "flex";
showMenu.style.display="none";
hideMenu.style.display="block";
});
hideMenu.addEventListener("click",()=>{
menu.style.display = "none";
showMenu.style.display="block";
hideMenu.style.display="none";
});