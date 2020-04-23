$(document).ready(function () {
    
    /**
     * Riproduzione chat con handlebars
     */

    // Referenze

    var messageInput = $('.message-input');
    var button = $('.enter-button');
    var timeStamp = getTime();
    var messages = $('.messages');
    var content = {};

    // Handlebars
    var source = $('#message-template').html();
    var template = Handlebars.compile(source);


    // al click su bottone invia
    button.click(function() {
        if (messageInput.val().length > 0) {
            sendMessage();
        };
    });

    // premendo invio
    messageInput.keypress(function (e) { 
        if ((e.which == 13) && (messageInput.val().length > 0)) {
            sendMessage();
        };
    });



    
    // funzioni

    // funzione per inviare un messaggio

    function sendMessage() {
        var messageText = messageInput.val().trim();

        // Handlebars template
        content = {
            text: messageText,
            time: timeStamp,
            status: 'sent'
        };

        var newMessage = template(content);

        messages.append(newMessage);
        
        replyBot();

        messageInput.val('');
    };

    // funzione per risposta automatica
    function replyBot() {
        setTimeout(function() {

            //cambio valore alle proprietà dell'oggetto
            content.text = 'Ok'
            content.status = 'received';

            var newMessage = template(content);
            messages.append(newMessage);

            }, 1000);
    };

    // funzione per acquisire ora e minuti
    function getTime() {
        var date = new Date;
        var hours = date.getHours();
        var mins = date.getMinutes();

        if (hours < 10 ) {
            hours = '0' + hours;
        } else if (mins < 10 ) {
            mins = '0' + mins;
        }
        
        return hours + ':' + mins;
    };

});

