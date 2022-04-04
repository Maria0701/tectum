 export function getSelects (container) {
    const target = container.querySelector('[data-set="select-target"]');
    const options = container.querySelectorAll('input[type=checkbox]');

    function init() {
        const checkedValue = [...options].find(option => option.checked === true).value;
        console.log(checkedValue);
        target.value = checkedValue;
        target.addEventListener('click', openHandler);
    }

    function openHandler(e) {
       if (e) e.preventDefault();
        container.classList.add('opened');
        [...options].forEach(elt => elt.addEventListener('change', changeValueHandler));
        document.addEventListener('click', outOfAreaHandler);
    }

    function changeValueHandler(e) {
        const targetElt = e.target.closest('label').querySelector('input'); 
        target.value = targetElt.value;
        closeHandler();
    }

    function closeHandler(e) {
        if (e) e.preventDefault();
        container.classList.remove('opened');
        document.removeEventListener('click', outOfAreaHandler);
        setTimeout(() => {
            options.forEach(elt => elt.removeEventListener('change', changeValueHandler));
        }, 1000);        
    }

    function outOfAreaHandler(e) {        
        if (!target.contains(e.target)) {
            closeHandler()
        }
    }

    init()
}