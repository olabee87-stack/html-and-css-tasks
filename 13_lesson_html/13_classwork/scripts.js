/*Back to top button*/

/*script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" > < /script>;*/

jQuery(document).ready(function() {
    var btn = $("#back-to-top-btn");

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass("show");
        } else {
            btn.removeClass("show");
        }
    });

    btn.on("click", function(e) {
        e.preventDefault();
        $("html, body").animate({
                scrollTop: 0
            },
            "300"
        );
    });
});