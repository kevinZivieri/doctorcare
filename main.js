
window.addEventListener('scroll', onScroll)

onScroll();

function onScroll () {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)


};

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha
    // quais dados são necessários?

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // verificar se a seção está abaixo da linha alvo
    // quais dados serão necessários?

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    let menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);


    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
};

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
};

function showBackToTopButtonOnScroll() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expandido')
};

function closeMenu() {
    document.body.classList.remove('menu-expandido')
};

function instaClose() {
    if (window.innerWidth >= 1024) {    
    document.body.classList.remove('menu-expandido')}
};

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 900,
}).reveal(`#home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`)