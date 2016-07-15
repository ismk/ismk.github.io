// Toggle night theme

body = $("body")
post_title = $(".post-teaser__title")
logo = $(".logo")
check_nightmode = localStorage.getItem("nightmode");

if(check_nightmode == "true") {
    body.addClass("dark");
    post_title.addClass("dark");
    logo.addClass("dark");
}

$(".lights").on("click", function() {
    if(body.hasClass("dark")) {
        body.removeClass("dark");
        post_title.removeClass("dark");
        logo.removeClass("dark");
        localStorage.setItem("nightmode", "false");
    }
    else {
        body.addClass("dark");
        post_title.addClass("dark");
        logo.addClass("dark");
        localStorage.setItem("nightmode", "true");
    }
});
