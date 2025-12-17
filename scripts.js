// Get modal elements
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');

// Get buttons
const loginBtn = document.querySelector('.user-login');
const signupBtn = document.querySelector('.sign-up');

// Get close buttons
const loginClose = document.querySelector('.login-close');
const signupClose = document.querySelector('.signup-close');

// Get spans inside modals
const openSignup = document.getElementById('open-signup');
const openLogin = document.getElementById('open-login');

// Open modals
loginBtn.addEventListener('click', () => loginModal.style.display = 'block');
signupBtn.addEventListener('click', () => signupModal.style.display = 'block');

// Close modals
loginClose.addEventListener('click', () => loginModal.style.display = 'none');
signupClose.addEventListener('click', () => signupModal.style.display = 'none');

// Switch modals
openSignup.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
});

openLogin.addEventListener('click', () => {
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === loginModal) loginModal.style.display = 'none';
    if (event.target === signupModal) signupModal.style.display = 'none';
});
