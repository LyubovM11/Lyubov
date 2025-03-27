'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал правильно')
});

const loadContent = () => {
    contentSection.innerHTML = '<p>This is dynamic content loaded with JavaScript.</p>';
};

loadContent();