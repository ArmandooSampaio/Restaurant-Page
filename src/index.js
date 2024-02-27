import { renderHome } from './main-home';
import { renderAbout } from './main-about';
import { renderMenu } from './main-menu';
import { renderNav } from './navbar';
import { renderFooter } from './footer';

const contentDiv = document.getElementById('content');

const createHtmlElement = (type, id, arrayClasses, content) => {
    const element = (document.createElement(type));

    if(id) element.id = id;

    if(arrayClasses){
        arrayClasses.forEach((myClass) => element.classList.add(myClass));
    };

    if(content) element.innerText = content;
    return element;
}

function home(){
    contentDiv.innerHTML = "";
    renderNav();
    renderHome();
    renderFooter();
}

function menu(){
    contentDiv.innerHTML = "";
    renderNav();
    renderMenu();
    renderFooter();
}

function about(){
    contentDiv.innerHTML = "";
    renderNav();
    renderAbout();
    renderFooter();
}
home();
document.addEventListener("click", (e) => {
  const target = e.target.innerText;

  if (target === "Home") home();
  if (target === "Menu" || target === "Ver Menu") menu();
  if (target === "Sobre") about();
});

export { createHtmlElement, contentDiv };

