
const loginNav = document.querySelector('.login');
const signupNav = document.querySelector('.signup');
const login = document.querySelector('#login');
const signup = document.querySelector('#signup');
const home = document.querySelector('.home');

home.addEventListener("click", () => {
    alert('Please Login first!!')
})

login.addEventListener("click", () => {
    window.location.href = "./Login/login.html";
})

signup.addEventListener("click", () => {
    window.location.href = "./Signup/signup.html";
})

// If user is already logged in then redirect him/her to shaopping landing page
if (window.localStorage.getItem('currentUser')) {
    window.location.href = '../Landingpage/landingpage.html';
}