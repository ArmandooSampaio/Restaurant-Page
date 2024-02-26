import { renderHome } from './js-modules/main-home';
import { renderAbout } from './js-modules/main-about';
import { renderMenu } from './js-modules/main-menu';
import { renderNav } from './js-modules/navbar';
import { renderFooter } from './js-modules/footer';}

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





export {createElement, contentDiv};

