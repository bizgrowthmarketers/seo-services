document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
    const faqItem = event.currentTarget.parentElement;
    faqItem.classList.toggle('open');
    });
});
