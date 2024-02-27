import { contentDiv as content, createHtmlElement } from './index.js';

function render() {
    const navItems = ['Home', 'Menu', 'Sobre'];
    const nav = document.createElement('nav');

    navItems.forEach((item) => {
        const button = createHtmlElement('button', null, ['nav-item', ['white']], item);
        nav.appendChild(button);  
    });

    content.appendChild(nav);
}

export { render as renderNav };
