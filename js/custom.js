// to add a hashtag when clicking a nav link
var menuItems = ['home', 'about', 'programme', 'documentation', 'participate', 'news'];
menuItems.forEach(function (item) {
    $('a[href="#' + item + '"]').on('click', function (e) {
        // e.preventDefault();
        $('#' + item + '-tab').tab('show');
        window.location.href = '#' + item;
    });
});