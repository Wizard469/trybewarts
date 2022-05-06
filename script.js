const loginButton = document.getElementById('login-button');
const password = document.getElementById('password');
const email = document.getElementById('email');

loginButton.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
