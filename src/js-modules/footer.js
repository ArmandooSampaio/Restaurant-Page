import {content, createHtmlElement} from ('../index');

function render(){ 
    const $footer = document.createElement('footer');
    const $p = createHtmlElement('p', null, ['golden'], 'Developed with ♥ by Armando Sampaio');

    $footer.appendChild(p);
    content.appendChild($footer);
}

export {render as renderFooter};
