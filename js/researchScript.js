const articles = [
  {
    id: 1,
    imgUrl: "./img/researches/image1.png",
    title: "Преимущества для здоровья жирных кислот омега-3",
    text: "Борется с депрессией и тревогой.Существует три типа жирных кислот омега-3 : ALA, EPA и DHA. Из этих трех EPA, лучше всех борется с депрессией. Исследование показало, что EPA столь же эффективен против депрессии, как и обычный антидепрессант...",
    link: "./html/researchArticles/omega3Article.html",
  },
  {
    id: 2,
    imgUrl: "./img/researches/image2.png",
    title: "Могут ли витамины и добавки исправить седину? могут!",
    text: "Определенные витамины и минералы помогают гарантировать, что ваши волосяные фолликулы вырабатывают пигменты (меланин), которые необходимы волосам для сохранения естественного цвета...",
    link: "./html/researchArticles/greyHair.html",
  },
  {
    id: 3,
    imgUrl: "./img/researches/image3.png",
    title: "ПРОТИВОГРИБКОВЫЙ ПРОТОКОЛ:стоп КАНДИДА",
    text: "Candida albicans - грибок, вызывающий вагинальные дрожжевые инфекции, может размножаться в кишечнике, что приводит к множеству неприятных симптомов и потенциально увеличивает риск заболеваний и аутоиммунных состояний...",
    link: "./html/researchArticles/stopCandida.html",
  },
  {
    id: 4,
    imgUrl: "./img/researches/image4.png",
    title:
      "ЛУЧШИЕ пищевые добавки 2021 года по версии Better Nutrition Awards ",
    text: "Борется с депрессией и тревогой.Существует три типа жирных кислот омега-3 : ALA, EPA и DHA. Из этих трех EPA, лучше всех борется с депрессией. Исследование показало, что EPA столь же эффективен против депрессии, как и обычный антидепрессант...",
    link: "./html/researchArticles/betterNutritionAwards2021.html",
  },
];
const createCardContent = (object) => {
  const {title, imgUrl, text, link, id} = object;
    const card = ` <div class="reviewWrapper researchWrapper">
    <a href="${link}" class="reviewPhoto"><img src="${imgUrl}" height="250"></a>
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