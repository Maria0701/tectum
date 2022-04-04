import { menuOpener } from "./components/menuopener";
import { getSelects } from "./components/select";
import { truncateElt } from "./components/truncard";

try {
    const opener = document.querySelector('.header__opener');
    const menuElt = document.querySelector('.header__menu-wrapper');  
    
    if (opener && menuElt) {
        const eltToOpen = document.querySelector('.header');
        menuOpener(opener, menuElt, eltToOpen);
    }    
} catch(e) {
    console.log(e);
}

try {
    const popupOpeners = document.querySelectorAll('.js-popup');
    const popup = document.querySelector('.popup');  
    
    if (popupOpeners.length > 0 && popup) {
        popupOpeners.forEach(ip => {
            const eltToClose = popup.querySelector('.popup__close');
            menuOpener(ip, popup, popup, eltToClose);
        });        
    }    
} catch(e) {
    console.log(e);
}


try {
    const copyElts = document.querySelectorAll('.copy');
    copyElts.forEach(elt => truncateElt(elt));
} catch(e) {
    console.log(e);
}

try {
    const selects = document.querySelectorAll('[data-select="select"]');
    if (selects.length > 0) selects.forEach(it => getSelects(it));
} catch(e) {
    console.log(e);
}