browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.query({ active: true, currentWindow: true })
        .then((tabs) => {
            const currentURL = tabs[0].url;
            const newURL = new URL("https://12ft.io/" + currentURL);
            browser.tabs.update({ url: newURL.toString() });  // Open in a new tab
            // Or, to update the current tab:
            // browser.tabs.update(tab.id, { url: newURL.toString() });
        });
});

  