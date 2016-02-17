$(document).ready(function() {
  var leftHand = $('.leftHand');
  var rightHand = $('.rightHand');

  $('.leftHand, .rightHand').on('focus', function () {
    if (leftHand.is(':focus')) {
      leftHand.hadFocus = true;
      rightHand.hadFocus = false;
    } else if (rightHand.is(':focus')) {
      rightHand.hadFocus = true;
      leftHand.hadFocus = false;
    }
  });

  $('form').on('submit', calculate)



  $('.numbers').on('click', 'button', function(event){
    event.preventDefault();
    var value = $(this).text();
    if(leftHand.hadFocus) {
      leftHand.val(value);
    } else if (rightHand.hadFocus) {
      rightHand.val(value);
    }
    console.log('jk');
  })

  $('.operator').on('click', function(event) {
    event.preventDefault();
    $('#operator').val($(this).text());
  })

  $('.clear').on('click', function(event) {
    event.preventDefault();
    $('.leftHand, .rightHand').val('');
    $('#operator').text('');
  })
});

function calculate(event) {
  event.preventDefault();

  var formArrayData = $(this).serializeArray();
  var data = {};
  formArrayData.forEach(function(element) {
    data[element.name] = element.value;
  });

  var url = '/';

  // data.operation is going to be a symbol (+, -, /, *) so we need to set the URL to a word for each operation instead

  switch (data.operation) {
    case "+":
          url += "add";
          break;
    case "-":
          url += "subtract";
          break;
    case "/":
          url += "divide";
          break;
    case "*":
          url += "multiply";
          break;
  }

  $.ajax({
    type: 'POST',
    url: url,
    success: updateDom,
    data: data
  });
}

function updateDom(dataFromServer) {
  $('.result').text(dataFromServer.result);
}

