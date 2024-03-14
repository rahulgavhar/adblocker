defaultFilters = [
    "*://*.zedo.com/*",
    "*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.moatads.com/*",
    "*://*.moat.com/*",
    "*://*.adservice.google.com/*",
    "*://*.adservice.google.co.in/*",
    "*://*.adservice.google.com/*",
    "*://*.adservice.google.co.in/*",
    "*://*.google-analytics.com/*",
    "*://*.googleads.g.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.google.com/ads/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true};
    },
    {urls: defaultFilters},
    ["blocking"]
)