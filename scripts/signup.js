const backbtn = document.getElementById('back')
const submitbtn = document.getElementById('submit')
const emailInput = document.getElementById('email')
const nameInput = document.getElementById('name')
const passwordInput = document.getElementById('password')
const passowrdConfirmInput = document.getElementById('confirmPassword')

function validateName(name) {
  if (isEmptyOrSpaces(passowrd)) {
    alert('Enter Name')
    return false
  }
  return true
}

function validatePassword(passowrd) {
  const re_password =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

  if (!passowrd.match(re_password) || isEmptyOrSpaces(passowrd)) {
    alert(
      'Password must be between 8-15 characters and contain atleast one Upper case and Lower case character and a number and a Special character'
    )
    return false
  }
  return true
}

function validateEmail(email) {
  const re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (!email.match(re_email) || isEmptyOrSpaces(email)) {
    alert('Unaccepted Email')
    return false
  }
  return true
}

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null
}

backbtn.addEventListener('click', function () {
  window.history.back()
})

submitbtn.addEventListener('click', function () {
  if (validateName(nameInput.value)) {
    if (validateEmail(emailInput.value)) {
      if (validatePassword(passwordInput.value)) {
        if (passwordInput.value == passowrdConfirmInput.value) {
          const userName = nameInput.value
          const userEmail = emailInput.value
          const userPassword = passwordInput.value

          $.post(
            './signup.php',
            {
              email: userEmail,
              password: userPassword,
              name: userName,
            },
            function (res, status) {
              if (res.includes('Used Email')) {
                alert('Email Used Already')
              } else {
                alert('Registration Successful')
                window.location.replace('./signup.html')
              }
            }
          )
        } else {
          alert('Please Confirm Password')
        }
      }
    }
  }
})
