const homeBtn = document.querySelector('#home-btn');
const contentDiv = document.getElementById('content');
const menuBtn = document.createElement('button');

const init = () => {
    contentDiv.innerHTML = '';
    contentDiv.classList.add('home');
    contentDiv.appendChild(menuBtn);

    homeBtn.addEventListener('click', init);
}

export default init;

