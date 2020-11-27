

$(document).ready(function () {
    "use strict";
    let burger = document.querySelector('.burger');
    let sidebar = document.querySelector('#sidebar');


    burger?.addEventListener('click', () => {
        sidebar.classList.toggle('side-active');
        burger.classList.toggle('close');
    });

    sidebar?.addEventListener('click', (event) => {
        console.log('side');

        event.stopPropagation(); // prevents executing the above event
    });

});


$(window).on('load', function () {

    "use strict";

    // Loading Elements

    $(".contain-loader").fadeOut(2000, function () {

        // Show The Scroll
        $("body").css("overflow", "hidden");

        $(this).fadeOut(2000, function () {
            $("body").css("overflow", "auto");
            $(this).remove();
        });

    });


});
