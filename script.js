const ValueNumber = (number1, number2) => {
  if (number1 === '' || number2 === '') {
    throw new Error('Preencha os campos para realizar a soma');
  }
  if (Number.isNaN(Number(number1)) || Number.isNaN(Number(number2))) {
    throw new Error('Informe dois números para realizar a soma');
  }
};

function calculateSum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    ValueNumber(value1, value2);
    const result = Number(value1) + Number(value2);
    return result;
  } catch (error) {
    return error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const result = calculateSum();
  displayResult(result);
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
