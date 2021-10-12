const closedheart = document.querySelector  ('.closed');
const openheart = document.querySelector('.open');

closedheart.addEventListener('click', () => {
    closedheart.classList.remove('active');
    openheart.classList.add('active');
});
openheart.addEventListener('click', () => {
    openheart.classList.remove('active');
    closedheart.classList.add('active');
});