'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал правильно')
});

// * 1. Начало
// * 2. Получаем картинки и полузнок
// * 3. Перемещаем ползунок
// *  3.1. Перемещаем ползунок вправо 
// *   3.1.1. Картинка "after" расширяется влево, а картинка "before" обрезается справа
// *  3.2. Перемещаем ползунок влево
// *   3.2.1. Картинка "before" расширяется вправо, а картинка "after" обрезается слева
// * 4. Конец

let beforeRangeValue = 50;

const catRange = document.querySelector(".input-range") 

catRange.addEventListener ('change', () => 
{
    console.log('Изменение положения ползунка')
    let value = document.querySelector(".input-range") .value;
    let imgBefore = document.querySelector(".comparison__image-before");
    let imgAfter = document.querySelector(".comparison__image-after");
    imgBefore.style.width = parseInt(value) + '%';
    imgAfter.style.width = (100 - parseInt(value)) + '%';   
    beforeRangeValue = value;
});

