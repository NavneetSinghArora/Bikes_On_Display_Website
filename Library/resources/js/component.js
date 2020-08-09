$('#signupSubmit').click(function () {
    $('#modalBody').hide();
    $('#alertBody').show();
    $('#emailValidation').hide();
    $('#alertBody').html('<div class="alert alert-success" role="alert">Thank You for Subscribing. We promise to not to Spam you.</p></div>')
    $('#signupSubmit').hide();
})

$('#signupButton').click(function () {
    $('#modalBody').show();
    $('#alertBody').hide();
    $('#signupSubmit').show();
    $('#signupSubmit').prop('disabled', false);
    $('#emailValidation').hide();
    $('#emailInput').val('');
    $('#signupSubmit').prop('disabled', true);
})

$('#emailInput').on('input', function () {
    
    var userinput = $(this).val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

    if (!pattern.test(userinput))
    {
        $('#emailValidation').show();
        $('#emailValidation').text('Please enter a valid Email Address');
        $('#signupSubmit').prop('disabled', true);
    } else {
        $('#emailValidation').hide();
        $('#signupSubmit').prop('disabled', false);
    }
});