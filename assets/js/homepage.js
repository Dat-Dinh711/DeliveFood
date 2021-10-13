// Slideshow
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4)
        counter = 1;
}, 5000);

// Slider for Recipe
const sliderProducts = document.querySelector('.container__recipe-products');
const sliderItems = document.querySelectorAll('.container__recipe-item');
const nextBtn = document.querySelector('.container__recipe-arrow-right');
const prevBtn = document.querySelector('.container__recipe-arrow-left');

const sliderLength = sliderItems.length;
let positionX = 0;
let index = 0;

window.addEventListener('load', function() {
    prevBtn.style = 'display: none';
});

nextBtn.addEventListener('click', function() {
    handleChangeSlide(1);
});

prevBtn.addEventListener('click', function() {
    handleChangeSlide(-1);
});

function handleChangeSlide(direction) {
    if (direction == 1) {
        index++;
        if (index > (sliderLength / 3) - 1) {
            return;
        }

        if (index == (sliderLength / 3) - 1) {
            nextBtn.style = 'display: none';
        }

        if (index > 0) {
            prevBtn.style = 'display: flex';
        }
        positionX = positionX - 1200;
        sliderProducts.style = 'transform: translateX(' + positionX + 'px)';
    } else if (direction == -1) {
        index--;
        if (index < 0) {
            return;
        }
        if (index == 0) {
            prevBtn.style = 'display: none';
        }

        if (index < (sliderLength / 3) - 1) {
            nextBtn.style = 'display: flex';
        }

        positionX = positionX + 1200;
        sliderProducts.style = 'transform: translateX(' + positionX + 'px)';
    }

    console.log(index);
}


// Register & Login Form: tắt/mở
const modal = document.querySelector('.js-modal');
const modalBody = document.querySelector(".js-modal__body");
const registerBtns = document.querySelectorAll('.js-register');
const loginBtns = document.querySelectorAll('.js-login');
const backBtns = document.querySelectorAll('.js-back-btn');
const registerForm = document.querySelector('.js-regis-auth-form');
const loginForm = document.querySelector('.js-login-auth-form');

function showRegisterForm() {
    modal.classList.add('open');
    registerForm.classList.add('open');
    loginForm.classList.remove('open');
}

function showLoginForm() {
    modal.classList.add('open');
    loginForm.classList.add('open');
    registerForm.classList.remove('open');
}

function hideForm() {
    modal.classList.remove('open');
    registerForm.classList.remove('open');
    loginForm.classList.remove('open');
}

for (const registerBtn of registerBtns) {
    registerBtn.addEventListener('click', showRegisterForm);
}

for (const loginBtn of loginBtns) {
    loginBtn.addEventListener('click', showLoginForm);
    // loginBtn.addEventListener('click', alert('hello'));
}

for (const backBtn of backBtns) {
    backBtn.addEventListener('click', hideForm);
}

modal.addEventListener('click', hideForm);

modalBody.addEventListener('click', function(event) {
    event.stopPropagation(modalBody);
})

// Login with Google
const loginGoogleBtns = document.querySelectorAll('.js-login-google');

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

for (const loginGoogleBtn of loginGoogleBtns) {
    loginGoogleBtn.addEventListener('click', onSignIn);
}

//Login Facebook
function statusChangeCallback(response) { // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response); // The current login status of the person.
    if (response.status === 'connected') { // Logged into your webpage and Facebook.
        testAPI();
    } else { // Not logged into your webpage or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this webpage.';
    }
}


function checkLoginState() { // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) { // See the onlogin handler
        statusChangeCallback(response);
    });
}


window.fbAsyncInit = function() {
    FB.init({
        appId: '359469145803979',
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: 'v3.0' // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) { // Called after the JS SDK has been initialized.
        statusChangeCallback(response); // Returns the login status.
    });
};

function testAPI() { // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
}

const loginFacebook = document.querySelector('.js-facebook-login');

loginFacebook.addEventListener('click', checkLoginState);