$("#form").on("submit", function (event) {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("textarea").val();

    if ($("input#name").val() && $("input#email").val()) {
        alert("Hello!" + name + "Thankyoufor reaching us, we will get back to you in a moment...hurr!!");
    } else {
        alert("Oops!! please provide your email and name");
    }
});
$(".des-image").click(function () {
    $(".design").show();
    $(".des-image").hide();

});
$(".des-image").click(function () {
    $(".des-image").show();
    $(".design").hide();
});
$(".des-image").click(function () {
    $(".des-image").hide();
    $(".design").show();
});