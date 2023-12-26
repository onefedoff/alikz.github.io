$(document).ready(function() {
    var $window = $(window);
    var $body = $('body');
    var $menuBtn = $('.header__open-menu-button');
    var $menuCloseBtn = $('.header__close-menu-button');
    var $header = $('.header');
    var $menuHoverItems = $('.header__navigation-menu-item.with-submenu');
    var isScrolled = false;
    var menuHoverTimeout;
    var menuHoverTimeoutDelay = 500;

    $menuBtn.on('click', function () {
        $body.addClass('menu-opened');
    });

    $menuCloseBtn.on('click', function () {
        $body.removeClass('menu-opened');
    });

    $menuHoverItems.on('mouseenter', function () {
        clearTimeout(menuHoverTimeout);
        $header.removeClass('submenu-unhover');
        $header.addClass('submenu-hover');
    });

    $menuHoverItems.on('mouseleave', function () {
        $header.removeClass('submenu-hover');
        $header.addClass('submenu-unhover');
        startMenuHoverTimeout();
    });

    $menuHoverItems.find('> .header__navigation-menu-item-link').on('click', function () {
       $(this).parent().toggleClass('header__navigation-menu-item--opened');
    });

    $window.on('scroll.header', function () {
        const scrollTop = $window.scrollTop();

        if (isScrolled !== !!scrollTop) {
            isScrolled = !!scrollTop;
            $body.toggleClass('scrolled', isScrolled);
        }
    });

    function startMenuHoverTimeout() {
        menuHoverTimeout = setTimeout(function() {
            $header.removeClass('submenu-unhover');
        }, menuHoverTimeoutDelay);
    }
});