const loginForm = document.querySelector('.login-form');

// Adăugați un event listener pentru evenimentul "submit"
loginForm.addEventListener('submit', function (event) {
  // Opriți comportamentul implicit al formularului (evitând reîncărcarea paginii)
  event.preventDefault();

  // Obțineți elementele formularului
  const emailInput = loginForm.elements['email'];
  const passwordInput = loginForm.elements['password'];

  // Verificați dacă toate câmpurile sunt completate
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    // Afișați un mesaj de alertă dacă există câmpuri goale
    alert('Please fill in all fields.');
  } else {
    // Creați un obiect cu datele introduse
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Afișați obiectul cu datele introduse în consolă
    console.log(formData);

    // Ștergeți valorile câmpurilor din formular
    loginForm.reset();
  }
});
