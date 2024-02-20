$(document).ready(function(){
    // Initialize Materialize tabs
    $('.tabs').tabs();

    // Add click event listeners to sidebar links
    $('.sidenav a').click(function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get the target tab id from the href attribute of the clicked link
        var targetTabId = $(this).attr('href');

        // Hide all top-level columns
        $('.container > .row > .col').addClass('hide');

        // Show the corresponding column
        $(targetTabId).removeClass('hide');
    });
});
