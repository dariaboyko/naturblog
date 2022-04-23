const reviews = [
  {
    id: 1,
    imgUrl: "./img/reviews/fishOil.webp",
    title: "Разница между рыбьим жиром и жиром печени трески",
    text: "Рыбий жир и жир печени трески являются отличными источниками полезных омега-3 EPA и DHA. Разница между ними в том, что жир печени...",
    link: "./reviewsHtmls/fishOils.html",
  },
  {
    id: 2,
    imgUrl: "./img/reviews/bestYod.jpeg",
    title: " 4 лучших йодных добавок на 2021 год",
    text: "Добавки, которые назначают американские врачи. Йод - это важный минерал, который играет важную роль в поддержании здоровья и функции вашей щитовидной железы....",
    link: "./reviewsHtmls/bestYod.html",
  },
];
const createCardContent = (object) => {
  const {title, imgUrl, text, link} = object;
    const card = ` <div class="reviewWrapper"><a href="${link}" class="reviewPhoto"><img width="250" height="250" src="${imgUrl}"></a><a href="${link}" class="reviewTitle">${title}</a>
    <div class="reviewText">${text}</div><a class="reviewLink" href="${link}">Читать статью >>></a> </div>`;
    return card;
};
const reviewsContent = document.getElementById("reviewsContent")

const generateContent = (array) => {

  reviewsContent.innerHTML = '';

  let data = '';

  array.forEach((element) => {
    data += createCardContent(element);
  });

  if (!data) data = 'No data';

  reviewsContent.innerHTML = data;
};
generateContent(reviews);

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