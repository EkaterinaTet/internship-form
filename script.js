const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");

function checkAndShow(text) {
  if (text.length) {
    alert(text);
    console.log(text);
  }
}

function handleClickButton(input) {
  let value = input.value;
  let name = input.name;

  let text = "";

  input.classList.remove("error");

  switch (true) {
    case /^-?\d*\.?\d+(,\d+)?$/.test(value):
      if (value === "42" && name === "field1") {
        text = "И спасибо за рыбу!";
      } else if (name === "field2") {
        text = "ЦИФРА!";
      }
      break;
    case value === "ДМИР" && name === "field2":
      text = "УРА!";
      break;
    case value === "ТЕРЕМ" && name === "field2":
      text = "<3";
      break;
    case value.trim() === "":
      input.value = value.trim();
      input.classList.add("error");
      break;
  }

  checkAndShow(text);
}

function choiceInputs(e) {
  e.preventDefault();
  inputs.forEach((input) => {
    handleClickButton(input);
  });
}

button.addEventListener("click", choiceInputs);
