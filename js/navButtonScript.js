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