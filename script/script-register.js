// declare
let form = document.forms['register-form']
let errorName = document.getElementById('error-name')
let errorEmail = document.getElementById('error-email')
let errorPassword = document.getElementById('error-password')
let errorGender = document.getElementById('error-gender')
let errorAgree = document.getElementById('error-agree')

// function
form.validateForm('submit', (ev) => {
    // Clear error messages
    errorName.innerText = ""
    errorEmail.innerText = ""
    errorPassword.innerText = ""
    errorGender.innerText = ""
    errorAgree.innerText = ""

    let valid = true

    if (form['name'].value === "") {
        errorName.innerText = "*Name field can't be empty!"
        ev.preventDefault()
        valid = false
    }
    if (form['email'].value === "") {
        errorEmail.innerText = "*Email field can't be empty!"
        ev.preventDefault()
        valid = false
    }
    if (form['password'].value === "") {
        errorPassword.innerText = "*Password field can't be empty!"
        ev.preventDefault()
        valid = false
    }
    if (form['gender'].value === "") {
        errorGender.innerText = "*Gender must be selected!"
        ev.preventDefault()
        valid = false
    }
    if (form['agree'].checked === false) {
        errorAgree.innerText = "*Must be checked!"
        ev.preventDefault()
        valid = false
    }

    // if true
    if (valid === true) {
        let confirm = confirm('Confirm Registration')
        if (confirm === true) {
            alert('Registration Success!!!')
        }
    }
})
