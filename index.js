const isAdult = (dateOfBirth) => {
  const todayDate = new Date();
  const userBirthDay = new Date(dateOfBirth);

  const todayYear = todayDate.getFullYear();
  const userBirthDayYear = userBirthDay.getFullYear();

  const userAge = todayYear - userBirthDayYear;
  return userAge >= 18;
};

const addStatus = (status, input) => {
  if (status) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

const setWarningText = (status, warningText, plaseForText) => {
  if (status === false) {
    document.querySelector(`.${plaseForText}`).textContent = warningText;
  }

  if (status === true) {
    document.querySelector(`.${plaseForText}`).textContent = "";
  }
};

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const birthDay = document.getElementById("birth-day");
const inputs = Array.prototype.slice.call(
  document.getElementsByTagName("input")
);
const submitBtn = document.getElementById("form-button");

firstName.addEventListener("input", (event) => {
  const input = event.target;
  const userName = input.value.trim().toLowerCase();
  const status = /^([a-zA-Zа-яёА-ЯЁ]+[-]?[a-zA-Zа-яёА-ЯЁ]+|[a-zA-Zа-яёА-ЯЁ]+)$/.test(userName);
  const warningText =
    userName === ""
      ? "Поле не должно быть пустым!"
      : "Можно использовать только буквы";
  setWarningText(status, warningText, "incorrect_name");

  addStatus(status, input);
});

lastName.addEventListener("input", (event) => {
  const input = event.target;
  const userSurname = input.value.trim().toLowerCase();
  const status = /^([a-zA-Zа-яёА-ЯЁ]+[-]?[a-zA-Zа-яёА-ЯЁ]+|[a-zA-Zа-яёА-ЯЁ]+)$/.test(userSurname);
  const warningText =
    userSurname === ""
      ? "Поле не должно быть пустым!"
      : "Можно использовать только буквы";
  setWarningText(status, warningText, "incorrect_surname");

  addStatus(status, input);
});

email.addEventListener("input", (event) => {
  const input = event.target;
  const userEmail = input.value.trim().toLowerCase();
  const status =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
      userEmail
    );
  const warningText =
    userEmail === ""
      ? "Поле не должно быть пустым!"
      : "Поле должно быть заполнено по форме: your-name8@domain.com";
  setWarningText(status, warningText, "incorrect_email");

  addStatus(status, input);
});

password.addEventListener("input", (event) => {
  const input = event.target;
  const userPassword = input.value.trim();
  const userPasswordConfirm = passwordConfirm.value.trim();
  const status = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/.test(
    userPassword
  );
  const statusForConfirm = userPassword === userPasswordConfirm;
  const warningTextPass =
    userPassword === ""
      ? "Поле не должно быть пустым!"
      : `Пароль должен иметь минимальную длинну 8 символов, 
    содержать хотя бы одну заглавную и строчную буквы, 
    содержать хотя бы одну цифру, 
    содержать хотя бы один символ`;
  const warningTextPassConf =
    userPasswordConfirm === ""
      ? "Поле не должно быть пустым!"
      : "Пароли не совпадают";
  setWarningText(status, warningTextPass, "incorrect_pass");
  setWarningText(
    statusForConfirm,
    warningTextPassConf,
    "incorrect_pass-confirm"
  );

  addStatus(status, input);
  addStatus(statusForConfirm, passwordConfirm);
});

passwordConfirm.addEventListener("input", (event) => {
  const input = event.target;
  const userPassword = password.value.trim();
  const userPasswordConfirm = input.value.trim();
  const status = userPassword === userPasswordConfirm;
  const errorType =
    userPasswordConfirm === ""
      ? "Поле не должно быть пустым!"
      : "Пароли не совпадают";
  setWarningText(status, errorType, "incorrect_pass-confirm");

  addStatus(status, input);
});

birthDay.addEventListener("input", (event) => {
  const input = event.target;
  const userBirthDay = birthDay.value.trim();
  console.log(userBirthDay);
  const status = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(userBirthDay);
  const errorType =
    userBirthDay === ""
      ? "Поле не должно быть пустым!"
      : "Дата должна быть заполнена по форме 01.01.2024: 2 цыфры даты, 2 цыфры месяца, 4 цыфры года";
  setWarningText(status, errorType, "incorrect_date-of-birth");
  addStatus(status, input);
  if (isAdult(userBirthDay) === false) {
    setWarningText(false, "Вам нет 18 лет", "incorrect_date-of-birth");
    addStatus(false, input);
  }
});

form.addEventListener("input", (event) => {
  event.preventDefault();

  let isOllValid = true;

  inputs.forEach((item) => {
    if (!item.classList.contains("valid")) {
      isOllValid = false;
    }
  });

  addStatus(isOllValid, form);

  if (form.classList.contains("valid")) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
