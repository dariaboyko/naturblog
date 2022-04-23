const items = [
  {
    id: 1,
    imgUrl: "./img/products/kal.png",
    name: "KAL",
    sale: "20",
    onSale: false,
    link: "",
  },
  {
    id: 2,
    imgUrl: "./img/products/youtheory.png",
    name: "youtheory",
    sale: "15",
    onSale: false,
    link: "",
  },
  {
    id: 3,
    imgUrl: "./img/products/thorne.png",
    name: "Thorne Research",
    sale: "15",
    onSale: false,
    link: "",
  },
  {
    id: 4,
    imgUrl: "./img/products/naturalFactors.png",
    name: "natural Factors",
    sale: "15",
    onSale: false,
    link: "",
  },
  {
    id: 5,
    imgUrl: "./img/products/WileyFinest.png",
    name: "Wiley`s Finest",
    sale: "20",
    onSale: false,
    link: "",
  },
  {
    id: 6,
    imgUrl: "./img/products/ChildLife.png",
    name: "ChildLife",
    sale: "15",
    onSale: false,
    link: "",
  },
  {
    id: 7,
    imgUrl: "./img/products/KagedMuscle.png",
    name: "Kaged Muscle",
    sale: "20",
    onSale: false,
    link: "",
  },
  {
    id: 8,
    imgUrl: "./img/products/NaturePath.png",
    name: "Nature`s Path",
    sale: "20",
    onSale: false,
    link: "",
  },
  {
    id: 9,
    imgUrl: "./img/products/NaturePlus.png",
    name: "Nature`s Plus",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=NAP&p=1&sort=13",
  },
  {
    id: 10,
    imgUrl: "./img/products/superiorSourse.png",
    name: "Superior Source",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=SPS&p=1&sort=13",
  },
  {
    id: 11,
    imgUrl: "./img/products/natraBio.png",
    name: "NatroBio",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=NBB&p=1&sort=13",
  },
  {
    id: 12,
    imgUrl: "./img/products/amazingNutrition.png",
    name: "Amazing Nutrition",
    sale: "10",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=AMN&p=1&sort=13",
  },
  {
    id: 13,
    imgUrl: "./img/products/UpSpring.png",
    name: "UpSpring",
    sale: "10",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=UPG&p=1&sort=13",
  },
  {
    id: 14,
    imgUrl: "./img/products/solaray.png",
    name: "Solaray",
    sale: "15",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=SOR&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 15,
    imgUrl: "./img/products/xtend.png",
    name: "Xtend",
    sale: "10",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=SCI&p=1&sort=13",
  },
  {
    id: 16,
    imgUrl: "./img/products/chocolove.png",
    name: "Chocolove",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=LOV&p=1&sort=13",
  },
  {
    id: 17,
    imgUrl: "./img/products/zolipops.png",
    name: "Zolipops",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=ZLP&p=1&sort=13",
  },
  {
    id: 18,
    imgUrl: "./img/products/wetnwild.png",
    name: "Wet n Wild",
    sale: "10",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=WNW&p=1&sort=13",
  },
  {
    id: 19,
    imgUrl: "./img/products/neutrogena.png",
    name: "Neutrogena",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=NGN&p=1&sort=13",
  },
  {
    id: 20,
    imgUrl: "./img/products/dove.png",
    name: "Dove",
    sale: "10",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=DVE&p=1&sort=13",
  },
  {
    id: 21,
    imgUrl: "./img/products/babyOrganic.png",
    name: "Nature`s Baby Organics",
    sale: "10",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=NAB&p=1&sort=13",
  },
  {
    id: 22,
    imgUrl: "./img/products/elizavecca.png",
    name: "Elizavecca",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/brands-of-the-week?bids=EZV&p=1&sort=13",
  },
  {
    id: 23,
    imgUrl: "./img/products/solumeve.png",
    name: "Solumeve",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/solumeve",
  },
  {
    id: 24,
    imgUrl: "./img/products/imunepills.png",
    name: "для имунной системы",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/immune-system",
  },
  {
    id: 25,
    imgUrl: "./img/products/energyPills.png",
    name: "для поддержания энергии",
    sale: "20",
    onSale: false,
    link: "https://ie.iherb.com/c/energy?specialtyFilters=7",
  },
  {
    id: 26,
    imgUrl: "./img/products/naturesAnswer.png",
    name: "Nature's Answer",
    sale: "10",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=%2cNTA&rcode=CBY1100",
  },
  {
    id: 27,
    imgUrl: "./img/products/lifeSeasons.png",
    name: "LifeSeasons",
    sale: "10",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=LSE&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 28,
    imgUrl: "./img/products/naturesTruth.png",
    name: "Nature's Truth",
    sale: "10",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=NTH&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 29,
    imgUrl: "./img/products/hydroxycut.png",
    name: "Hydroxycut",
    sale: "20",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=HYX&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 30,
    imgUrl: "./img/products/endangeredSpeciesChocolate.png",
    name: "Endangered Species Chocolate",
    sale: "20",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=SPC&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 31,
    imgUrl: "./img/products/nuNaturals.png",
    name: "NuNaturals",
    sale: "20",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=NNS&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 32,
    imgUrl: "./img/products/petNaturalsOfVermont .png",
    name: "Pet Naturals of Vermont",
    sale: "10",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=PEN&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 33,
    imgUrl: "./img/products/rapidLash.png",
    name: "RapidLash",
    sale: "10",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=RSH&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 34,
    imgUrl: "./img/products/instaNatural.png",
    name: "InstaNatural",
    sale: "20",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=IST&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 35,
    imgUrl: "./img/products/EOProducts.png",
    name: "EO Products",
    sale: "20",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=EOP&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 36,
    imgUrl: "./img/products/terrasil.png",
    name: "Terrasil",
    sale: "20",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=TSL&p=1&sort=13&rcode=CBY1100",
  },
  {
    id: 37,
    imgUrl: "./img/products/hobeLabs.png",
    name: "Hobe Labs",
    sale: "20",
    onSale: true,
    link: "https://ua.iherb.com/c/brands-of-the-week?bids=HBL&p=1&sort=13&rcode=CBY1100",
  },
];
const exSales = [
  {
    id: 1,
    imgUrl: "./img/products/simplyOne240.png",
    name: "Super Nutrition, Simply One, витамины D3 и K2, 240 капсул ",
    sale: "30",
    onSale: true,
    link: "https://ua.iherb.com/pr/super-nutrition-vitamin-d3-k2-240-veggie-capsules/110695?rcode=CBY1100",
  },
  {
    id: 2,
    imgUrl: "./img/products/simplyOne60.png",
    name: "Super Nutrition, Simply One, витамины D3 и K2, 60 капсул ",
    sale: "30",
    onSale: true,
    link: "https://ua.iherb.com/pr/super-nutrition-vitamin-d3-k2-60-veggie-capsules/110694?rcode=CBY1100",
  },
];
const createCardContent = (object) => {
  const {name, imgUrl, sale, link} = object;
    const card = `<div class="card">
    <a href="${link}"><img class="productImg" src="${imgUrl}" alt="${name}">
    <div class="productSaleText"><span class="bold">${sale}%</span> на продукцию ${name}</div>
    </div></a>`;
    return card;
};

const productSaleContent = document.getElementById("productSaleContent");
const exclusiveProductSaleContent = document.getElementById("exclusiveProductSaleContent");

const generateContent = (array, id) => {

  id.innerHTML = "";

  let data = '';

  array.forEach((element) => {
    data += createCardContent(element);
  });

  if (!data) data = 'No data';

  id.innerHTML = data;
};

const filterProducts = (array) => {
    let onSaleProducts=[];
    array.forEach((e)=>{if(e.onSale){onSaleProducts.push(e)}})
    return onSaleProducts;
}
generateContent(filterProducts(items), productSaleContent);
generateContent(filterProducts(exSales), exclusiveProductSaleContent);


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