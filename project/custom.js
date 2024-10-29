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


function toggleClass(element, add, remove) {
    element.classList.add(add);
    element.classList.remove(remove);
}

function toggleDiv(type) {
    var perMonthBtn = document.getElementById('perMonthBtn');
    var perYearBtn = document.getElementById('perYearBtn');
    var perMonth = document.getElementById('perMonth');
    var perYear = document.getElementById('perYear');

    if (type === 'perMonth') {
        toggleClass(perMonthBtn, 'active', 'inactive');
        toggleClass(perYearBtn, 'inactive', 'active');
        toggleClass(perMonth, 'active', 'd-none');
        toggleClass(perYear, 'd-none', 'active');
    } else {
        toggleClass(perYearBtn, 'active', 'inactive');
        toggleClass(perMonthBtn, 'inactive', 'active');
        toggleClass(perYear, 'active', 'd-none');
        toggleClass(perMonth, 'd-none', 'active');
    }
}