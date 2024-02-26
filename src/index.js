import { renderHome } from './js-modules/main-home';
import { renderAbout } from './js-modules/main-about';
import { renderMenu } from './js-modules/main-menu';
import { renderNav } from './js-modules/navbar';
import { renderFooter } from './js-modules/footer';

const contentDiv = document.getElementById('content');

createHtmlElement = (type, id, arrayClasses, content) => {
    const element = (document.createElement(type));

    if(id) element.id = id;

    if(arrayClasses){
        array.forEach(myClass => element.classList.add(myClass));
    };

    if(content) element.innerText = content;
    return element;
}

function home(){
    $content.innerHTML = "";
    render();
    renderHome();
    renderFooter();
}

function menu(){
    $content.innerHTML = "";
    render();
    renderMenu();
    renderFooter();
}

function about(){
    $content.innerHTML = "";
    render();
    renderAbout();
    renderFooter();
}
home();
document.addEventListener("click", (e) => {
  const target = e.target.innerText;

  if (target === "HOME") home();
  if (target === "MENU" || target === "VER O MENU") menu();
  if (target === "SOBRE") about();
});



export {createElement, contentDiv};

