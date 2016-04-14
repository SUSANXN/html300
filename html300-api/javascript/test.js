
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