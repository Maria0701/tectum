// получаем ширину элемента в числовом выражении
// другой вариант решения вопроса https://codepen.io/markchitty/pen/RNZbRE

function turnWidthToNumber(elt) {
    return Number(getComputedStyle(elt).width.slice(0, -2));
} 

export function truncateElt(elt) {
    const lastPartText = elt.innerHTML.substr(-5); // вытаскиваем последние 5 букв
    const parentElt = elt.parentElement; // получаем родительский элемент
    const newElt = document.createElement('span'); // создаем спан
    newElt.innerText = lastPartText; // закидываем в этот спан выделенные буквы
    const parentEltWidth = turnWidthToNumber(parentElt); // ширина блока, в котором находится текст
    const eltWidth = turnWidthToNumber(elt); // шарина текстового блока
    elt.after(newElt); // вставляем элемент
    const newEltWidth = turnWidthToNumber(newElt);
    const newWidth = parentEltWidth - newEltWidth - 24;
    if (newWidth > eltWidth) {
        parentElt.removeChild(newElt);
    }
}