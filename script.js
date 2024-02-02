$(document).ready(function () {
    // Form validation using jQuery
    $("#contactForm").submit(function (event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
    });
});
