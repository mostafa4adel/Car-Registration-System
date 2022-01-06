const emailInput = document.getElementById('inputEmail')
const passwordInput = document.getElementById('inputPassword')
const loginBtn = document.getElementById('loginBtn')
const signupBtn = document.getElementById('signupBtn')
const wrongInput = document.getElementById('wrongInput')
const adminOption = document.getElementById('adminOption')
const customerOption = document.getElementById('customerOption')

const noUserChecked = document.getElementById('adminOrUserNotChecked')

signupBtn.addEventListener('click', function () {
  window.location.href = './signup.html'
})

function validateEmail(email) {
  const re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (!email.match(re_email)) {
    wrongInput.style.display = 'block'
    return false
  }
  return true
}

function validatePassword(passowrd) {
  if (passowrd.length < 8 || passowrd === '') {
    wrongInput.style.display = 'block'
    return false
  }
  return true
}

loginBtn.addEventListener('click', function () {
  emailValid = validateEmail(emailInput.value)
  if (emailValid) {
    passwordValid = validatePassword(passwordInput.value)
    if (passwordValid) {
      if (adminOption.checked || customerOption.checked) {
        userEmail = emailInput.value
        userPassword = passwordInput.value
        let user = 'A'
        if (customerOption.checked) user = 'C'
        $.post(
          './PHP/login.php',
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
      } else {
        noUserChecked.style.display = 'block'
      }
    }
  }
})
