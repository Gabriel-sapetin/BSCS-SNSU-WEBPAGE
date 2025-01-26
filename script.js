const wrapper = document.querySelector('.wrapper'); // Corrected selector
const loginLink = document.querySelector('.login-link'); // Ensure this matches your HTML
const registerLink = document.querySelector('.register-link'); // Ensure this matches your HTML
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
}); 

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
}); 
