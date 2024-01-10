function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = Number(value1) + Number(value2);

  return result;
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
