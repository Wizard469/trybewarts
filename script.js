const password = document.getElementById('password').value;
const email = document.getElementById('email').value;

function login() {
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
