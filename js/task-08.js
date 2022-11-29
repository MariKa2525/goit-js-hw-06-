const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return
    }
    const emailUser = `${email.value}`
    const passwordUser =  `${password.value}`
    const FormData  = {emailUser, passwordUser}
        
    console.log(FormData);

    event.currentTarget.reset();
}

