const items = [
    {
        id: 1,
        imgUrl: './img/products/kal.png',
        name: 'KAL',
        sale: '20',
        onSale: false,
        link:""
        
    },
    {
        id: 2,
        imgUrl: './img/products/youtheory.png',
        name: 'youtheory',
        sale: '15',
        onSale: false,
        link:""
        
    },
    {
        id: 3,
        imgUrl: './img/products/thorne.png',
        name: 'Thorne Research',
        sale: '15',
        onSale: false,
        link:""
        
    },
    {
        id: 4,
        imgUrl: './img/products/naturalFactors.png',
        name: 'natural Factors',
        sale: '15',
        onSale: false,
        link:""

    },
    {
        id: 5,
        imgUrl: './img/products/WileyFinest.png',
        name: 'Wiley`s Finest',
        sale: '20',
        onSale: false,
        link:""
        
    },
    {
        id: 6,
        imgUrl: './img/products/ChildLife.png',
        name: 'ChildLife',
        sale: '15',
        onSale: false,
        link:""
        
    },
    {
        id: 7,
        imgUrl: './img/products/KagedMuscle.png',
        name: 'Kaged Muscle',
        sale: '20',
        onSale: false,
        link:""
        
    },
    {
        id: 8,
        imgUrl: './img/products/NaturePath.png',
        name: 'Nature`s Path',
        sale: '20',
        onSale: false,
        link:""
        
    },
    {
        id: 9,
        imgUrl: './img/products/NaturePlus.png',
        name: 'Nature`s Plus',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=NAP&p=1&sort=13"
        
    },
    {
        id: 10,
        imgUrl: './img/products/superiorSourse.png',
        name: 'Superior Source',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=SPS&p=1&sort=13"
        
    },
    {
        id: 11,
        imgUrl: './img/products/natraBio.png',
        name: 'NatroBio',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=NBB&p=1&sort=13"
        
    },
    {
        id: 12,
        imgUrl: './img/products/amazingNutrition.png',
        name: 'Amazing Nutrition',
        sale: '10',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=AMN&p=1&sort=13"
        
    },
    {
        id: 13,
        imgUrl: './img/products/UpSpring.png',
        name: 'UpSpring',
        sale: '10',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=UPG&p=1&sort=13"
    },
    {
        id: 14,
        imgUrl: './img/products/solaray.png',
        name: 'Solaray',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=SOR&p=1&sort=13"
    },
    {
        id: 15,
        imgUrl: './img/products/xtend.png',
        name: 'Xtend',
        sale: '10',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=SCI&p=1&sort=13"
    },
    {
        id: 16,
        imgUrl: './img/products/chocolove.png',
        name: 'Chocolove',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=LOV&p=1&sort=13"
    },
    {
        id: 17,
        imgUrl: './img/products/zolipops.png',
        name: 'Zolipops',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=ZLP&p=1&sort=13"
    },
    {
        id: 18,
        imgUrl: './img/products/wetnwild.png',
        name: 'Wet n Wild',
        sale: '10',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=WNW&p=1&sort=13"
    },
    {
        id: 19,
        imgUrl: './img/products/neutrogena.png',
        name: 'Neutrogena',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=NGN&p=1&sort=13"
    },
    {
        id: 20,
        imgUrl: './img/products/dove.png',
        name: 'Dove',
        sale: '10',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=DVE&p=1&sort=13"
    },
    {
        id: 21,
        imgUrl: './img/products/babyOrganic.png',
        name: 'Nature`s Baby Organics',
        sale: '10',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=NAB&p=1&sort=13"
    },
    {
        id: 22,
        imgUrl: './img/products/elizavecca.png',
        name: 'Elizavecca',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/brands-of-the-week?bids=EZV&p=1&sort=13"
    },
    {
        id: 23,
        imgUrl: './img/products/solumeve.png',
        name: 'Solumeve',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/solumeve"
    },
    {
        id: 24,
        imgUrl: './img/products/imunepills.png',
        name: 'для имунной системы',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/immune-system"
    },
    {
        id: 25,
        imgUrl: './img/products/energyPills.png',
        name: 'для поддержания энергии',
        sale: '20',
        onSale: true,
        link:"https://ie.iherb.com/c/energy?specialtyFilters=7"
    }
]
const createCardContent = (object) => {
  const {name, imgUrl, sale, link} = object;
    const card = `<div class="card">
    <a href="${link}"><img class="productImg" src="${imgUrl}" alt="${name}" usemap="#products">
    <div class="productSaleText"><span class="bold">${sale}%</span> на продукцию ${name}</div>
    </div></a>`;
    return card;
};

const productSaleContent = document.getElementById("productSaleContent")

const generateContent = (array) => {

  productSaleContent.innerHTML = '';

  let data = '';

  array.forEach((element) => {
    data += createCardContent(element);
  });

  if (!data) data = 'No data';

  productSaleContent.innerHTML = data;
};

const filterProducts = (array) => {
    let onSaleProducts=[];
    array.forEach((e)=>{if(e.onSale){onSaleProducts.push(e)}})
    return onSaleProducts;
}
generateContent(filterProducts(items));
console.log(filterProducts(items))