const button = document.querySelector('.button--nav');
const form = document.getElementById('form');

export const toggleForm = () => {
    button.addEventListener('click', () => {
    form.classList.toggle('inactive')
})
}
