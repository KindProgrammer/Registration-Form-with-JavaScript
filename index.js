const addStatus = (status, input) => {
    if (status) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

const isPasswordsMatch = (password, password_confirm) => {
    return password === password_confirm;
}

const form = document.getElementById('form');
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("password-confirm");
const birth_day = document.getElementById("birth-day");
const inputs = Array.prototype.slice.call(document.getElementsByTagName('input'));
const submit_btn = document.getElementById("form-button");

first_name.addEventListener('input', (event) => {
    const input = event.target
    const userName = input.value.trim().toLowerCase();
    const status = (/^[a-zA-Zа-яёА-ЯЁ]+$/).test(userName)

    addStatus(status, input);
});

last_name.addEventListener('input', (event) => {
    const input = event.target
    const userSurname = input.value.trim().toLowerCase();
    const status = (/^[a-zA-Zа-яёА-ЯЁ]+$/).test(userSurname)

    addStatus(status, input);
});

email.addEventListener('input', (event) => {
    const input = event.target
    const userEmail = input.value.trim().toLowerCase();
    const status = (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu).test(userEmail)

    addStatus(status, input);
})

password.addEventListener('input', (event) => {
    const input = event.target
    const userPassword = input.value.trim();
    const userPasswordConfirm = password_confirm.value.trim();
    const status = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/).test(userPassword)
    const statusForConfirm = userPassword === userPasswordConfirm;

    addStatus(status, input);
    addStatus(statusForConfirm, password_confirm);
})

password_confirm.addEventListener('input', (event) => {
    const input = event.target
    const userPassword = password.value.trim();
    const userPasswordConfirm = input.value.trim();
    const status = userPassword === userPasswordConfirm;

    addStatus(status, input);
})

birth_day.addEventListener('input', (event) => {
    const input = event.target
    const userBirthDay = birth_day.value.trim();
    const status = (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/).test(userBirthDay);
    addStatus(status, input);
})

form.addEventListener('input', (event) => {
    event.preventDefault();

    let isOllValid = true;

    inputs.forEach((item) => {
        if (!item.classList.contains('valid')) {
            isOllValid = false;
        }
    })

    addStatus(isOllValid, form);

    if (form.classList.contains('valid')) {
        submit_btn.disabled = false;
    } else {
        submit_btn.disabled = true;
    }
});