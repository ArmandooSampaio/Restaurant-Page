import {content, createHtmlElement} from ('../index');

function render() {
    const main = document.createElement('main');

    const bemVindos = createHtmlElement('p', null, ['cursive', 'golden'], 'Bem Vindos');
    const title = createHtmlElement('h1', null, ['white'], 'A Pizzaria');
    const hr = document.createElement('hr');
    const subtitle = createHtmlElement('p', null,  ['text-center', 'white'], 'Pizzas feitas com Amor e Carinho');
    const button = createHtmlElement('button', null, null, 'Ver O Menu');

    main.appendChild(bemVindos);
    main.appendChild(title);
    main.appendChild(hr);
    main.appendChild(subtitle);
    main.appendChild(button);
}

export {render as renderHome};

