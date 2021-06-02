document.addEventListener('DOMContentLoaded', () => {
    showModal('.hamburger', '.menu', 'menu-active');

    function showModal(triggerSelector, modalSelector, classActive) {
        const btns = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector);

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (modal.classList.contains(classActive)) {
                    modal.classList.remove(classActive);
                } else {
                    modal.classList.add(classActive);
                }
            });
        });
    }
});