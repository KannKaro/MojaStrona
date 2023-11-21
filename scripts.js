let aboutMeBtn = document.querySelector('#aboutMeButton')
let aboutMeContainer = document.querySelector('.container-about-me')
let buttons = document.querySelector('.container-buttons')

aboutMeBtn.addEventListener('click', () => {
    aboutMeContainer.style.display = 'flex'
    buttons.style.display = 'none'
})
