


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}






// IMAGE


$(document).ready(function() {
    // $('[data-toggle="toggle"]').change(function(){
    //     $(this).parents().next('.hide').toggle();
    // });
    $('table.courses').find("tr.labels").on("click", function () {
        $(this).nextUntil('tr.labels').toggle();
    });
});


// maps


$('.carousel').carousel()












$(document).ready(function () {

    /* Every time the window is scrolled ... */
$(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideMe').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1500);

            }

        });

    });

});
