// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const outputReview = document.querySelector('.output__data');

for (let index = 0; index < localStorage.length; index++) {
    let product = localStorage.key(index);
    let outputReviewBase = JSON.parse(localStorage.getItem(product));
    const elementProdact = document.createElement ('div');
    outputReview.insertAdjacentElement('beforeend', elementProdact);
    elementProdact.insertAdjacentHTML('beforeend', `
    <h2> ${product}<button onclick='showRew(this)'>показать отзывы</button> </h2>`
    );
    const elementReview = document.createElement ('div');
    elementReview.hidden = true;
    elementProdact.insertAdjacentElement('beforeend', elementReview);
    outputReviewBase.forEach(element => {
        const reviewItem = document.createElement('div');
        elementReview.insertAdjacentElement('beforeend', reviewItem);
        const reviewTxt = document.createElement ('span');
        reviewTxt.textContent = element;
        reviewItem.insertAdjacentElement('beforeend',reviewTxt);
        reviewItem.insertAdjacentHTML('beforeend',' ');
        reviewItem.insertAdjacentElement('beforeend', addBattonDel (reviewTxt, outputReviewBase, product));
        reviewItem.insertAdjacentHTML('beforeend', '<br></br>');
        
    });    
}
function addBattonDel(btnReviewTxt, btnOutputReveiwBase, btnProduct) {
    const btnDel = document.createElement('button');
    btnDel.textContent = "УДАЛИТЬ";

    btnDel.addEventListener('click', () => {
        if (btnOutputReveiwBase.length > 1) {
            let indexItem = btnOutputReveiwBase.findIndex((element) => element === 
            btnReviewTxt.textContent);
            btnOutputReveiwBase.splice(indexItem, 1);
            localStorage.setItem(btnProduct, JSON.stringify(btnOutputReveiwBase));            
        } else {
            localStorage.removeItem(btnProduct);
            btnDel.parentElement.parentElement.parentElement.remove();
        }
        btnReviewTxt.parentElement.remove();
        btnDel.remove();
    });
    return btnDel;
}

function showRew (el) {
    let hiddenElem = el.parentElement.parentElement.lastChild;
    if (hiddenElem.hidden) {
        hiddenElem.hidden = false;
        el.textContent = 'Скрыть отзывы';        
    } else {
        hiddenElem.hidden = true;
        el.textContent = 'отобразить отзывы';
    }
    
}