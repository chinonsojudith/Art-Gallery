const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

const loginBtn = document.getElementById('login')
const signUpBtn = document.getElementById('signup')
const loginModal = document.getElementById('loginModal')
const signUpModal = document.getElementById('signupModal')
const closeLoginModal = document.getElementById('closeModal')
const closeSignUpModal = document.getElementById('closeSignUpModal')

btn.addEventListener('click', () =>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// Open login modal
loginBtn.addEventListener('click', ()=> {
    loginModal.classList.add('block')
    loginModal.classList.remove('hidden')
})

// Open signup modal
signUpBtn.addEventListener('click', ()=> {
    signUpModal.classList.add('block')
    signUpModal.classList.remove('hidden')
})

// modal close button 
closeLoginModal.addEventListener("click", ()=> {
    loginModal.classList.add('hidden')
})

// modal close signup modal button 
closeSignUpModal.addEventListener("click", ()=> {
    signUpModal.classList.add('hidden')
})