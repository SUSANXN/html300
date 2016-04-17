
  $('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
  })

function addNumbers()
{
  var firstNumber = document.getElementbyId("txtFirstNumber").value; 
  var secondNumber = document.getElementById("txtSecondNumber").value; 
  document.getElementById("txtResult").value = firstNumber + secondNumber; }

function addNumbers()
{
    var firstNumber = parseFloat(document.getElementById("txtFirstNumber").value);
    if (isNaN(firstNumber))
    {
        alert("Please enter a valid number in the first number textbox");
        return;
    }
    var secondNumber = parseFloat(document.getElementById("txtSecondNumber").value);
    if (isNaN(secondNumber))
    {
        alert("Please enter a valid number in the second number textbox");
        return;
    }
    document.getElementById("txtResult").value = firstNumber + secondNumber;
}