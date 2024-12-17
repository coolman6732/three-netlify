
$(function () {
    var docElem = document.documentElement,
        header = document.querySelector('.fix-nav'),
        didScroll = false,
        changeHeaderOn = 100; // 離TOP 的高度 啟動
    function init() {
        window.addEventListener('scroll', function (event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 250);
            }
        }, false);
    }
    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add(header, 'fix-nav-shrink');
        } else {
            classie.remove(header, 'fix-nav-shrink');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    init();

});