// Form aur inputs ko select karna
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const phoneInput = document.getElementById('phone');
const successMessage = document.getElementById('successMessage');

// Email validation regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone validation regex (10 digits)
function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}

// Validation function
function validateInput() {
  let isValid = true;

  // Name validation
  if (nameInput.value.trim().length < 3) {
    setInvalid(nameInput, 'Name must be at least 3 characters');
    isValid = false;
  } else {
    setValid(nameInput);
  }

  // Email validation
  if (!isValidEmail(emailInput.value.trim())) {
    setInvalid(emailInput, 'Please enter a valid email');
    isValid = false;
  } else {
    setValid(emailInput);
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    setInvalid(passwordInput, 'Password must be at least 6 characters');
    isValid = false;
  } else {
    setValid(passwordInput);
  }

  // Confirm password validation
  if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value === '') {
    setInvalid(confirmPasswordInput, 'Passwords do not match');
    isValid = false;
  } else {
    setValid(confirmPasswordInput);
  }

  // Phone validation (optional)
  if (phoneInput.value.trim() !== '' && !isValidPhone(phoneInput.value.trim())) {
    setInvalid(phoneInput, 'Phone number must be 10 digits');
    isValid = false;
  } else {
    setValid(phoneInput);
  }

  return isValid;
}

// Invalid input ke liye function
function setInvalid(element, message) {
  element.classList.add('is-invalid');
  element.classList.remove('is-valid');
  element.nextElementSibling.textContent = message;
  element.nextElementSibling.style.display = 'block';
}

// Valid input ke liye function
function setValid(element) {
  element.classList.remove('is-invalid');
  element.classList.add('is-valid');
  element.nextElementSibling.textContent = '';
  element.nextElementSibling.style.display = 'none';
}

// Form submit event handler
form.addEventListener('submit', function (e) {
  e.preventDefault();
  successMessage.style.display = 'none';

  if (validateInput()) {
    // Agar sab valid hai toh success message dikhana
    successMessage.style.display = 'block';

    // Form reset kar sakte ho agar chaho
    form.reset();

    // Validation styles reset karna
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.classList.remove('is-valid');
    });
  }
});
