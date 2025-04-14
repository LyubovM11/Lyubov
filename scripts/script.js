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

//Объявляем переменную welcоmeButtonModal и сохраняем в нее кнопку c классом welcome__button
const welcоmeButtonModal = document.querySelector(".welcome__button");
//объявляем переменную modalApplication и сохраняем в нее модальное окно, которое хотим увидеть
const modalApplication = document.querySelector(".applications");

//Если есть такая кнопка и модальное окно
if (welcоmeButtonModal && modalApplication) {
//Для кнопки «Записаться на курс» добавляем обработчик события клика по этой кнопке:
    welcоmeButtonModal.addEventListener("click", () => {
// удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
      modalApplication.removeAttribute("hidden");
    });
}

// добавляем обработчик события при клике вне области формы. Тогда каждый раз, когда пользователь кликает где-либо на фоне вокруг появившейся формы, будет вызываться функция,
window.addEventListener("click", (event) => {
// проверяем, был ли клик на фоне модального окна
    if (event.target === modalApplication) {
//если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
        modalApplication.setAttribute("hidden", true);
    }
});

//Объявляем переменную closeModalButton и сохраняем в нее кнопку c классом application__button
const closeModalButton = document.querySelector(".application__close");

//Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
closeModalButton.addEventListener("click", () => {
// Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
    modalApplication.setAttribute("hidden", true);
});


//Объявляем переменную AboutProductContainer и сохраняем в нее элементы about-product
const AboutProductContainer = document.querySelector(".about-product__card");

//  проверяем существует ли элемент AboutProductContainer, если он существует то переходим далее
    if (AboutProductContainer) {
//далее создаем массив dataTitleAboutProduct, который содержит строки с именами тренеров.(здесь уже пишем те значения, которые надо подставить вместо слова Тренер 1, Тренер 2 и т.д)
        const dataTitleAboutProduct = [
            "1. Функциональное питание содержит только полезные питательные вещества",
            "2. Выпускается в виде порошка, который необходимо лишь залить кипятком",
            "3. Замените один или два приема обычного корма на наше функциональное питание",
            "4. Уже через месяц наслаждайтесь изменением к лучшему вашего питомца!",
        ];

//Объявляем переменную title.AboutProduct и сохраняем в нее все элементы на странице с классом treners__subtitle (где должны стоять имена тренеров)
        const titleAboutProduct =
        AboutProductContainer.querySelectorAll(".about-product__text");

// Проходим по каждому элементу массива titleTreners с помощью цикла forEach. Внутри функции 2 переменные: item – текущий заголовок, а index — его индекс в массиве.
titleAboutProduct.forEach((item, index) => {

//здесь обновляем значение текущего заголовка (textContent) на новое значение из массива dataTitleCards, используя индекс текущего заголовка.
            item.textContent = dataTitleAboutProduct [index];
           });
    }




 //Объявляем переменную headerMenu и сохраняем в нее header__menu
const headerMenu = document.querySelector('.header__menu');
// Если такой элемент существует
if (headerMenu){
//Объявляем переменную headerList и сохраняем в нее header__list, чтобы мы могли добавить новые элементы
        const menu = headerMenu.querySelector('.menu');

//Создаем объект menuData, который содержит данные для трех ссылок меню.
        const menuData = {
// Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
            link1: {
                CSSclass: "menu__link--active",
                link: 'index.html',
                title: 'Главная',
            },
            link2: {
                link: '#',
                title: 'Каталог',
            },
            link3: {
                link: '#',
                title: 'Подбор программы',
            }
        
        }


//Создаем функцию createLink, которая будет добавлять ссылку в меню. Внутри функции 2 переменные: UrlLink – адрес, а title — текст ссылки.
        const createLink = (UrlLink, title, CSSclass) =>{
// создаем переменную  link, которая будет содержать HTML-код ссылки и вставляем в него 2 переменные
            const link = `
            <li class="menu__item"><a href="${UrlLink}" class="menu__link ${CSSclass}">${title}</a></li>
            `;
            return link;
        }

// Создаем цикл for и проходим по всем элементам объекта menuData.
        for (const linkItem in menuData) {
//Получаем данные для ссылки и сохраняем в переменную link.
            const link = menuData[linkItem];
//Создаем переменную linkIndex и вызываем функцию createLink, куда передаем адрес и заголовок.
            const linkIndex = createLink(link.UrlLink, link.title, link.CSSclass);
// С помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка headerList.
            menu.insertAdjacentHTML('beforeend', linkIndex);

        }
}

