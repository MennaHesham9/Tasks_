$(document).ready(function () {
    $(".filter").addClass("show");

    $(".filter-btn").click(function () {
        var filter = $(this).attr("data-filter");

        if (filter === "all") {
            $(".filter").addClass("show");
        } else {
            $(".filter").removeClass("show");
            $("." + filter).addClass("show");
        }

        $(".filter-btn").removeClass("active");
        $(this).addClass("active");
    });
});
