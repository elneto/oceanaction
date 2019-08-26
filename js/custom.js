// if there is a # at the URL bar location show that tab
function navigateHash() {
    var url = window.location.href.toString();
    if (url.match('#')) {
        let hashedLink = $('#' + url.split('#')[1] + '-tab');
        hashedLink.tab('show');
        $('li.current').removeClass('current');
        hashedLink.parent().addClass('current')
        // hashedLink.hasClass('nav-link') ? hashedLink.parent().addClass('naviSelected') : hashedLink.parent().parent().addClass('naviSelected');
    }
}
// call it when the document is ready
$(document).ready(function () {
    navigateHash();
});
// for the back and fwd buttons or manually enter the URL, etc
window.onhashchange = function () {
    navigateHash();
};
// to add a hashtag when clicking a nav link
var menuItems = ['home', 'about', 'programme', 'documentation', 'participate', 'news'];
menuItems.forEach(function (item) {
    $('a[href="#' + item + '"]').on('click', function (e) {
        // e.preventDefault();
        $('#' + item + '-tab').tab('show');
        window.location.href = '#' + item;
    });
});