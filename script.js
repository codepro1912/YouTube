let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let namefield = document.querySelector('.namefield');
let signInBtn = document.querySelector('.signinbtn');
let signUpBtn = document.querySelector('.signupbtn');
let text = document.querySelector('.text');


signInBtn.addEventListener('click', function(){
    title.innerHTML = 'Sign In';
    underline.style.transform = 'translateX(30px)';
    namefield.style.maxHeight = '0';
    text.innerHTML = 'Lost password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
})

signUpBtn.addEventListener('click', function(){
    title.innerHTML = 'Sign Up';
    underline.style.transform = 'translateX(0)';
    namefield.style.maxHeight = '60px';
    text.innerHTML = 'Password Suggestion';
    signInBtn.classList.add('disable');
    signUpBtn.classList.remove('disable');
})