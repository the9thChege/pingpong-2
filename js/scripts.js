//Business Logic
var dividend = function(number) {
  if (number % 15 === 0) {
    var word = "pingpong";
    return word;
  } else if (number % 5 === 0) {
    var word2 = "pong";
    return word2;
  } else if (number % 3 === 0) {
    var word3 = "ping";
    return word3;
  } else {
    var word4 = number;
    return word4;
  }
};

//UI Logic
$(document).ready(function() {

  $("form#input").submit(function(event) {
    var endResult = parseInt($("#entry").val());
    var numberList = [];

    var divx = document.getElementById('output');

    var ul = document.createElement('ul');

    for (var val = 1; val <= endResult; val++) {
      numberList.push(dividend(val));
    }

    for (var index = 0; index < numberList.length; index++) {
      var li = document.createElement('li');
      thelist = document.createTextNode(numberList[index]);
      li.appendChild(thelist);
      ul.appendChild(li);
    }
    divx.appendChild(ul);

    document.body.style.backgroundImage = "url('img/neuroshima.png')";
    document.body.main.style.backgroundImage = "url('img/neuroshima.png')";

    event.preventDefault();
  });
});
