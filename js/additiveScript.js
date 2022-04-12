const additives =[
    {
        id:1,
        imgUrl: './img/additives/omega1.png',
        name: 'NATURELO, омега-3, рыбий жир в форме триглицеридов, 1100 мг',
        text:'для поддержки здоровья сердца, мозга и глаз',
        category: 'bestOmega',
        link:''
    },
    {
        id:2,
        imgUrl: './img/additives/omega2.png',
        name: 'LIFE EXTENSION, супер омега-3 из рыбьего жира с ЭПК и ДГК',
        text:'поддерживает здоровье сердечно-сосудистой системы и когнитивную функцию',
        category: 'bestOmega',
        link:''
    },
    {
        id:3,
        imgUrl: './img/additives/children1.png',
        name: '“Защита с первых дней” от ChildLife',
        text:'уникальная добавка, которая поможет улучшить работу собственных защитных механизмов и укрепить иммунитет ваших детей.',
        category: 'children',
        link:''
    },
    {
        id:4,
        imgUrl: './img/additives/children2.png',
        name: 'Mega Food Kids Multi Gummies',
        text:'жевательные конфеты, которые содержат 19 основных питательных веществ, в том числе витамины C, D3 и цинк для поддержки иммунитета, холин для здорового развития мозга и витамин B12 для производства энергии.',
        category: 'children',
        link:''
    },
    {
        id:5,
        imgUrl: './img/additives/energy1.png',
        name: 'Garden of Life , энергетические жевательные конфеты с яблочным уксусом',
        text:'Эти вкусные жевательные мармеладки содержат 1000 мг яблочного уксуса + 40 мг натурального кофеина из органической кофейной ягоды и органический зелёный  чай, чтобы повысить энергию и сосредоточить внимание.',
        category: 'energyBoost',
        link:''
    },
    {
        id:6,
        imgUrl: './img/additives/energy2.png',
        name: 'Diamond Formulas, Herpanacine Skin Support',
        text:'Эта комплексная смесь содержит основные питающие кожу витамины, травы, аминокислоты и антиоксиданты, включая лизин, бета-каротин, L-тирозин, витамин E, цинк, селен, одуванчик',
        category: 'hairNails',
        link:''
    }
]

const createCardContent = (object) => {
    const {name, imgUrl, text, link} = object;
      const card = `<div class="additiveWrapper">
      <a href="${link}" class="additivePhoto"><img height='250' width='250'src="${imgUrl}"></a>
      <a href="${link}" class="additiveTitle">${name}</a>
      <p class="additiveText">${text}</p>
  </div>`;
      return card;
};

const additiveOmegaContent = document.getElementById("additiveOmegaContent");
const additiveChildrenContent = document.getElementById("additiveChildrenContent");
const additiveEnergyContent = document.getElementById("additiveEnergyContent");
const generateContent = (array) => {
    array.forEach((e)=>{
        switch(e.category){
            case'bestOmega':
            additiveOmegaContent.innerHTML+=createCardContent(e);
            break;
            case'children':
            additiveChildrenContent.innerHTML+=createCardContent(e);
            break;
            case'energyBoost':
            additiveEnergyContent.innerHTML+=createCardContent(e);
            break;
            case'hairNails':
            additiveHairNailsContent.innerHTML+=createCardContent(e);
            break;
        }
    })
  };
generateContent(additives);

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