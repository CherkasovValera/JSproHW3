"use strict";
// Страница добавления отзыва о продукте.
// Должна содержать форму с полем для ввода названия продукта и текстовое поле для текста отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
// Необходимо реализовать проверку, оба поля должны быть заполнены, если это не так, необходимо выводить ошибку пользователю.

const inputFieled = document.querySelector('.product__name');
const addText = document.querySelector('.input__review');
const addButton = document.querySelector('.button__btn');
const massegError = document.querySelector('.masseg__error');

addButton.addEventListener('click', () => {
    const product = inputFieled.value.trim();
    const review = addText.value.trim();
    if (product !=='' && review !=='') {
        let reviewList = JSON.parse(localStorage.getItem(product)) || [];
        
        reviewList.push(review);
        localStorage.setItem(product, JSON.stringify(reviewList))
    } else{
        massegError.textContent = " Заполнены не все поля ввода!"
    }
});