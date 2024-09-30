const addStatus = (status, input) => {
    if (status) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

const form = document.getElementById('form');
const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirm = document.getElementById("password-confirm");
const birth_day = document.getElementById("birth-day");
const inputs = Array.prototype.slice.call(document.getElementsByTagName('input'));

first_name.addEventListener('focusout', (event) => {
    const input = event.target
    const userName = input.value.trim().toLowerCase();
    const status = (/^[a-zA-Zа-яёА-ЯЁ]+$/).test(userName)

    addStatus(status, input);
});

last_name.addEventListener('focusout', (event) => {
    const input = event.target
    const userSurname = input.value.trim().toLowerCase();
    const status = (/^[a-zA-Zа-яёА-ЯЁ]+$/).test(userSurname)

    addStatus(status, input);
});

email.addEventListener('focusout', (event) => {
    const input = event.target
    const userEmail = input.value.trim().toLowerCase();
    const status = (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu).test(userEmail)

    addStatus(status, input);
})

password.addEventListener('focusout', (event) => {
    const input = event.target
    const userPassword = input.value.trim();
    const status = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/).test(userPassword)

    addStatus(status, input);
})

password_confirm.addEventListener('focusout', (event) => {
    const input = event.target
    const userPassword = password.value.trim();
    const userPasswordConfirm = input.value.trim();
    const status = userPassword === userPasswordConfirm;

    addStatus(status, input);
})

birth_day.addEventListener('focusout', (event) => {
    const input = event.target
    const userBirthDay = birth_day.value.trim();
    console.log(userBirthDay)
    const status = (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/).test(userBirthDay);
    addStatus(status, input);
})

form.addEventListener('focusout', (event) => {
    event.preventDefault();

    let isOllValid = true;

    console.log(inputs);
    inputs.forEach((item) => {
        if (!item.classList.contains('valid')) {
            isOllValid = false;
        }
    })

    addStatus(isOllValid, form);
});