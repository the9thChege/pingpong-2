var Calculator = require('./../js/scripts.js').calculatorModule;

$(document).ready(function() {
  $('#input').submit(function(event) {
    event.preventDefault();
    var goal = $('#entry').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#output').append("<li>" + element + "</li>");
    });
  });
});
