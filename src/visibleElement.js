function visibleElement() {

    let projectContainer = document.querySelector('.projects-div');
    let projectHeader = document.querySelector('.project-header')
    let projectRect = projectContainer.getBoundingClientRect();
    let projectCondition = (
        projectRect.top >= 0 &&
        projectRect.left >= 0 &&
        projectRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        projectRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    // if project container is on the screen,
    // add unblur class to projectHeader
    if (projectCondition) {
        projectHeader.classList.add('header-noblur');
        projectHeader.classList.remove('header-blur');
    }
    // else add blur class to projectHeader
    else {
        projectHeader.classList.add('header-blur');
        projectHeader.classList.remove('header-noblur');
    }

    let aboutContainer = document.querySelector('.about-div');
    let aboutHeader = document.querySelector('.about-header');
    let aboutRect = aboutContainer.getBoundingClientRect();
    let aboutCondition = (
        aboutRect.top >= 0 &&
        aboutRect.left >= 0 &&
        aboutRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        aboutRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )

    if (aboutCondition) {
        aboutHeader.classList.add('header-noblur');
        aboutHeader.classList.remove('header-blur');
    }
    // else add blur class to projectHeader
    else {
        aboutHeader.classList.add('header-blur');
        aboutHeader.classList.remove('header-noblur');
    }
}

window.addEventListener('scroll', () => {
    visibleElement();
})

export default visibleElement;