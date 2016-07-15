// Toggle night theme

body = $("body")
post_title = $(".post-teaser__title")
logo = $(".logo")


$(".lights").on("click", function() {
    body.toggleClass("dark");
    post_title.toggleClass("dark");
    logo.toggleClass("dark");
});
