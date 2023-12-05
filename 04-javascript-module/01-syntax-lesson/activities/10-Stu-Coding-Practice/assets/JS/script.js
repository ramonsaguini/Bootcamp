function calculator() {

  var player1 = parseInt(document.getElementById('inp_p1').value);
  var player2 = parseInt(document.getElementById('inp_p2').value);
  var player3 = parseInt(document.getElementById('inp_p3').value);

  var total = player1 + player2 + player3;
  var maxTax = 40000000
  var calc = total - maxTax
  var taxAmout = calc * 0.18;

  if (total <= maxTax) {
    document.getElementById('res').value = "Tax free";
  } else {
    document.getElementById('res').value = "Need pay $" + taxAmout
  }

}
