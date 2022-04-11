const reviews =[
	{id: 1,
        imgUrl: './img/reviews/iherbBrends.png',
        title: 'ОБЗОР ПРОДУКЦИИ - ЛИЧНЫЙ БРЕНД iHERB',
        text: 'Перед тем, как начать производить продукцию Личного бренда, iHerb проанализировал все популярные запросы своих покупателей. То есть, собственные бренды iHerb - это самые актуальные и востребованные товары...',
        link:''
    }
]
const createCardContent = (object) => {
  const {title, imgUrl, text, link} = object;
    const card = ` <div class="reviewWrapper"><img class="reviewPhoto" src="${imgUrl}"><a href="${link}" class="reviewTitle">${title}</a>
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