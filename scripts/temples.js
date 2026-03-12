document.getElementById('currentYear').textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});