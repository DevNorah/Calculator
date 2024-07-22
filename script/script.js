function clearValue() {
    document.getElementById("input").value = '';
}

function result() {
  if (result) {
    const equals = document.getElementById("input");

    equals.value = eval(equals.value);
  } else equals.value = "error";
}

function displayNumber(value) {
  document.getElementById("input").value += value;
}
