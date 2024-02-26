import {content, createHtmlElement} from ('../index');

let menu = [
    {
        name: "Pizza Portuguesa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price: "40,00R$",
      },
      {
        name: "Pizza De Frango Com Calabresa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price: "60,00R$",
      },
      {
        name: "Pizza De Peperoni",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
        price: "55,00R$",
      },
];


function render(){
    const main = document.createElement('main');
    main.classList.add('main');

    const title = createHtmlElement('h1', null, ['gray'], 'Menu');
    const hr = document.createElement('hr');

    main.appendChild(title);
    main.appendChild(hr);

    menu.forEach((element) => {
        const div = createHtmlElement('div', null, ['menu-item'], null);
        const name = createHtmlElement('h2', null, ['golden'], element.name);
        const description = createHtmlElement('p', null, ['gray'], element.description);
        const price = createHtmlElement('h2', null, ['golden'], item.price);
        const hr = createHtmlElement('hr', null, ['menu-hr'], null);

        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(price);
        div.appendChild(hr);

        main.appendChild(div);

    });
    content.appendChild(main);
};

export {render as renderMenu};