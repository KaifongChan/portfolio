function scrollConditions() {

    let navContainer = document.querySelector('.nav-container');

    window.addEventListener('scroll', function () {
        if (this.window.scrollY == 0) {
            navContainer.classList.add('at-top');
            navContainer.classList.remove('not-at-top');
        }
        else {
            navContainer.classList.remove('at-top');
            navContainer.classList.add('not-at-top');
        }
    })
}

export default scrollConditions;