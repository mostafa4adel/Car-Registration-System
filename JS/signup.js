const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')
const inputConfirmPassword = document.getElementById('inputConfirmPassword')

const maleOption = document.getElementById('maleOption')
const femaleOption = document.getElementById('femaleOption')

const inputAddress = document.getElementById('inputAddress')

const inputPhone = document.getElementById('phone')

const signupBtn = document.getElementById('signupBtn')

const cancelBtn = document.getElementById('cancelBtn')

const wrongInput = document.getElementById('wrongInput')

const alreadyUsedEmail = document.getElementById('wrongEmail')

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null
}

function validateEmail(email) {
  const re_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (!email.match(re_email) || isEmptyOrSpaces(email)) {
    wrongInput.style.display = 'block'
    return false
  }
  return true
}

function validatePassword(passowrd) {
  if (isEmptyOrSpaces(passowrd) || passowrd.length < 8) {
    wrongInput.style.display = 'block'
    return false
  }
  return true
}

signupBtn.addEventListener('click', function () {
  if (validateEmail(inputEmail.value)) {
    if (!isEmptyOrSpaces(inputName.value)) {
      if (validatePassword(inputPassword.value)) {
        if (inputPassword.value == inputConfirmPassword.value) {
          // do stuff here
          const userName = inputName.value
          const userEmail = inputEmail.value
          const userPassword = inputPassword.value
          let userGender = 'F'
          if (maleOption.checked) {
            userGender = 'M'
          }
          const userAddress = inputAddress.value
          const userPhoneNumeber = inputPhone.value

          $.post(
            './PHP/signup.php',
            {
              email: userEmail,
              password: userPassword,
              name: userName,
              gender: userGender,
              address: userAddress,
              phoneNumber: userPhoneNumeber,
            },
            function (res, status) {
              if (res.includes('Used Email')) {
                alreadyUsedEmail.style.display = 'block'
              } else {
                alert('Registration Successful')
                window.location.replace('./login.html')
              }
            }
          )
        }
      }
    } else {
      wrongInput.style.display = 'block'
    }
  }
})

cancelBtn.addEventListener('click', function () {
  window.location.replace('./login.html')
})
