$("#form").on("submit", function (event) {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("textarea").val();

    if ($("input#name").val() && $("input#email").val()) {
        alert("Hello!" + name + "Thankyou for reaching us, we will get back to you in a moment...stay tuned!!");
    } else {
        alert("Oops!! please provide your correct  email and name");
    }
});

$(".des-image").click(function () {
    $(".design").show();
    $(".des-image").hide();

});

$(".design").click(function () {
    $(".des-image").show();
    $(".design").hide();
});
$(".dev-image").click(function () {
    $(".development").show();
    $(".dev-image").hide();
})
$(".development").click(function () {
    $(".dev-image").show();
    $(".development").hide();

});
$(".p-image").click(function () {
    $(".product").show();
    $(".p-image").hide();
});
$(".product").click(function () {
    $(".p-image").show();
    $(".product").hide();
});
$("#work1").hover(function () {
    $("#work1").toggle();
    $("#w1").show();

});
$("#work2").hover(function () {
    $("#work2").toggle();
    $("#w2").show();
});
$("#work3").hover(function () {
    $("#work3").toggle();
    $("#w3").show();
});
$("#work4").hover(function () {
    $("#work4").toggle();
    $("w4").show();
});
$("#work5").hover(function () {
    $("#work5").toggle();
    $("w5").show();
});
$("#work6").hover(function () {
    $("#work6").toggle();
    $("w6").show();
});
$("#work7").hover(function () {
    $("#work7").toggle();
    $("w7").show();
});
$("#work8").hover(function () {
    $("#work8").toggle();
    $("w8").show();
});