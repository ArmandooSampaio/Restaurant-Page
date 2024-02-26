import {content, createHtmlElement} from ('../index');

function render(){
    const main = document.createElement('main');

    const title = createHtmlElement('h1', null, ['cursive', 'gray', 'Sobre Nós']);
    const hr = document.createElement('hr');

    const $content = "Esse Meu Pequeno Projeto Foi Feito Todo utilizando utilizando o Dom para adicionar os elementos na pagina, Confira no meu github!!!Tambei utilizei ele para melhorar minha Proeficiencia utilizando o webpack (: "
    const description = createHtmlElement('p', null, ['description'], $content);

    main.appendChild(title);
    main.appendChild(hr);
    main.appendChild($content);
    main.appendChild(description);

    content.appendChild(main);
}

export {render as renderAbout};