$(document).ready(function(){
  console.log('ready');

  var message = document.getElementById('textinput');
  var button = '#submitchat';
  var chatbox = '#chatbox-container';


//if the user use BUTTON to submit the message
//   $(button).click(function(){
//     console.log(message.value);

//     $(chatbox).append('<li class="list-group-item"> '+message.value+'</li>');

//     message.value='';

//     $('.chatbox').scrollTop($('.chatbox').height());

//   })

// //if the user use ENTER to submit chat
//   $('#textinput').keydown(function(event) {

//     // '13' refer to ENTER
//     if (event.keyCode == 13) {
//       $(chatbox).append('<li class="list-group-item"> '+message.value+'</li>');
//       message.value='';
//       $('.chatbox').scrollTop($('.chatbox').height()*1000);

//     }
//   });



});
