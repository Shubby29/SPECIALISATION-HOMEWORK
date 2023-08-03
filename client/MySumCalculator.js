function calculateSum() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var resultElement = document.getElementById('result');
  
    if (isNaN(number1) || isNaN(number2)) {
      resultElement.textContent = "Please enter valid numbers!";
    } else {
      let sum = number1 + number2;
      resultElement.textContent = `Sum: ${sum}`;
    }
  }
  
  function clearResult() {
    document.getElementById('result').textContent = 'Result:';
  }
  