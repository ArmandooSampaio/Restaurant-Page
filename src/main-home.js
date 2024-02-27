import {contentDiv as content, createHtmlElement} from './index.js';

function render() {
    const main = document.createElement('main');

    const bemVindos = createHtmlElement('p', null, ['cursive', 'golden'], 'Bem Vindos');
    const title = createHtmlElement('h1', null, ['white'], 'A Pizzaria');
    const hr = document.createElement('hr');
    const subtitle = createHtmlElement('p', null,  ['text-center', 'white'], 'Pizzas feitas com Amor e Carinho');
    const button = createHtmlElement('button', null, null, 'Ver Menu');

    main.appendChild(bemVindos);
    main.appendChild(title);
    main.appendChild(hr);
    main.appendChild(subtitle);
    main.appendChild(button);

    content.appendChild(main);
}

export {render as renderHome};

