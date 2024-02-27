import {contentDiv as content, createHtmlElement} from './index.js';

function render(){
    const main = document.createElement('main');

    const title = createHtmlElement('h1', null, null, 'Sobre Nós');
    const hr = document.createElement('hr');

    const $content = "Esse Meu Pequeno Projeto Foi Feito Todo utilizando o Dom para adicionar os elementos na pagina";
    const $p1 = createHtmlElement('p', null, ['description','white'], $content);

    main.appendChild(title);
    main.appendChild(hr);
    main.appendChild($p1);

    content.appendChild(main);
}

export {render as renderAbout};