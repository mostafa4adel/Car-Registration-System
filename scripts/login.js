const loginBtn = document.getElementById('login')
const signupBtn = document.getElementById('signup')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')

signupBtn.addEventListener('click', function () {
  emailInput.value = ''
  window.location.href = './signup.html'
})

function validateEmail(email) {
  const re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (!email.match(re_email)) {
    alert('Unaccepted Email')
    return false
  }
  return true
}

function validatePassword(passowrd) {
  const re_password =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

  if (!passowrd.match(re_password)) {
    alert(
      'Password must be between 8-15 characters and contain atleast one Upper case and Lower case character and a number and a Special character'
    )
    return false
  }
  return true
}

loginBtn.addEventListener('click', function () {
  emailValid = validateEmail(emailInput.value)
  if (emailValid) {
    passwordValid = validatePassword(passwordInput.value)
    if (passwordValid) {
      userEmail = emailInput.value
      userPassword = passwordInput.value
      $.post(
        './login.php',
        {
          email: userEmail,
          password: userPassword,
        },
        function (res, status) {
          if (res.includes('Wrong Email or Password')) {
            alert(res)
          } else {
            alert(res)
            emailInput.value = ''
            passwordInput.value = ''
          }
        }
      )
    }
  }
})
