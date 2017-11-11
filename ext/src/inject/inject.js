chrome.extension.sendMessage({}, function(response) {
	tryHideAds();
});

function getLinks() {
	return document.querySelectorAll(".divCloseBut a");
}

function tryHideAds() {
	var links = getLinks();

	if (links.length > 0) {
		links.forEach(function (a) { 
			if (a.click) a.click();
		});
		setTimeout(tryHideAds, 10);
	}
}