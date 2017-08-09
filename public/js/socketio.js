var socket = io();

var message = document.getElementById('textinput');
var button = '#submitchat';
var chatbox = '#chatbox-container';
var istyping = document.getElementById('isTyping');

// Prompt username
const NAME = prompt("nama apa ?");

$(button).click(function(){
    socket.emit('chat',{
        message: message.value,
        name: NAME
    });
});

// if the user use ENTER to submit chat
$('#textinput').keydown(function(event) {
    // '13' refer to ENTER

    if (event.keyCode == 13){
        socket.emit('chat',{
            message: message.value,
            name: NAME
        });
    }
});

$('#textinput').keypress( function() {
    socket.emit('typing', NAME);
})

//Fix the innerhtml clear when ENTER
setInterval(function(){
    istyping.innerHTML = "";
}, 3000);

function scrolltop() {
    $('.chatbox').scrollTop($('.chatbox').height()*1000);
}

socket.on('chat', function(data) {
    message.value = '';
    $(chatbox).append('<li class="list-group-item"> <b>'+data.name+'</b> : '+data.message+'</li>');
    scrolltop();
    istyping.innerHTML = '';
});

socket.on('typing', function(data) {
    istyping.innerHTML = '<p><em>'+data+' is typing a message...</em><p>';
    scrolltop();
});

socket.on('counter', function(data){
    $('.counter').html('<h2>'+data+'</h2>');
})
