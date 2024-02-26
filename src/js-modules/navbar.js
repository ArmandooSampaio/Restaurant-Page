import {content, createHtmlElement} from ('../index');

function render() {
    const navItems = ['Home', 'Menu', 'Sobre'];
    const nav = document.createElement('nav');

    navItems.forEach((item) => createHtmlElement('button', null, 'nav-item', item));

    content.appendChild(nav);
}

export {render as renderNav};
