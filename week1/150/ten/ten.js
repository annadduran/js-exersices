function multiplyBy() {
  const num1 = parseFloat(document.getElementById("firstNumber").value);
  const num2 = parseFloat(document.getElementById("secondNumber").value);
  const result = num1 * num2;
  document.getElementById("result").innerText = result;
}

function divideBy() {
  const num1 = parseFloat(document.getElementById("firstNumber").value);
  const num2 = parseFloat(document.getElementById("secondNumber").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Por favor ingresa números válidos";
    return;
  }

  if (num2 === 0) {
    document.getElementById("result").innerText = "No se puede dividir por 0";
  } else {
    const result = num1 / num2;
    document.getElementById("result").innerText = result;
  }
}
