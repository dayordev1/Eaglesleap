// Smooth scrolling
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Contact form submission
$('form').submit(function(e) {
    e.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    $.ajax({
        type: 'POST',
        url: 'send-email.php',
        data: {
            name: name,
            email: email,
            message: message
        },
        success: function(data) {
            alert('Message sent!');
        },
        error: function(xhr, status, error) {
            alert('There was an error sending your message. Please try again later.');
        }
    });
});