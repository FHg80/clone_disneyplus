document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            const abaAlvo = e.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            hideAllTabs();
            removeButtonActive();
            aba.classList.add('shows__list--is-active');
            e.target.classList.add('shows__tabs__button--is-active')
        })
    }

    for (let i = 0; i<questions.length; i++) {
        questions[i].addEventListener('click',openOrCloseAnswer);
    }
})

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i<tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i<buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function openOrCloseAnswer(e) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = e.target.parentNode;

    elementoPai.classList.toggle(classe);
}