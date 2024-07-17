$(document).ready(function() {
  $('#menu-btn').click(function() {
    $('#mobile-menu').toggleClass('hidden');

    // Form submit event listener
    $('#contactForm').on('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Collect form data
      var formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
      };

      // AJAX POST request to SheetDB API
      $.ajax({
        url: 'https://sheetdb.io/api/v1/jys61ogopc8zx',
        type: 'POST',
        data: formData,
        success: function(response) {
          console.log('Data sent successfully:', response);
          alert('Your message has been sent!'); // Show success message
          $('#contactForm')[0].reset(); // Clear form fields
        },
        error: function(error) {
          console.error('Error sending data:', error);
          alert('There was an error sending your message. Please try again later.');
        }
      });
    });
  });



});