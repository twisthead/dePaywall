browser.browserAction.onClicked.addListener(
    function () {
        var currentUrl = window.location.href;
        console.log(currentUrl);
    }
);
