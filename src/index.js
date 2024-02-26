

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

