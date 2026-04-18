$(document).ready(function () {
  // HEART LIKE BUTTON
  $(".like-btn").click(function (e) {
    e.preventDefault();
    $(this).find("i").toggleClass("bi-heart bi-heart-fill liked");
  });

  // CONTACT FORM VALIDATION
  $("#submit_form").submit(function (e) {
    let phoneInput = $('input[name="phone"]')[0];

    // Clear previous custom message
    phoneInput.setCustomValidity("");

    // Add custom message only if phone pattern is wrong
    let phoneValue = phoneInput.value.trim();

    if (phoneValue.length < 11) {
    phoneInput.setCustomValidity("Phone number shall be at least 11 digits");
    }

    // Stop submission if form is invalid
    if (!this.checkValidity()) {
      this.reportValidity();
      return;
    }

    e.preventDefault();

    $("#success_message").show();
    this.reset();
  });

  // Clear phone custom message while typing
  $('input[name="phone"]').on("input", function () {
    this.setCustomValidity("");
  });
});