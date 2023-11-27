let aboutMeBtn = document.querySelector('#aboutMeButton')
let aboutMeContainer = document.querySelector('.container-about-me')
let buttons = document.querySelector('.container-buttons')
let backButton = document.querySelector('#backButton')
let projectsButton = document.querySelector('#projectsButton')

aboutMeBtn.addEventListener('click', () => {
    aboutMeContainer.style.display = 'flex'
    buttons.style.display = 'none'
    backButton.style.display = 'inline'
})

backButton.addEventListener('click', () => {
    aboutMeContainer.style.display = 'none'
    buttons.style.display = 'flex'
    backButton.style.display = 'none'
})

projectsButton.addEventListener('click', () => {
    buttons.style.display = 'none'
    backButton.style.display = 'inline'
})