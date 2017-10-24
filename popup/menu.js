function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
  console.log(`Error: ${error}`);
}

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("opennewtab")) {
		var destinationName = "Busy";
		var destination = "https://busy.org";

		var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
		gettingActiveTab.then((tabs) => {
			// Open desired tab. This fails for some reason?
			var creating = browser.tabs.create({
				url:"https://stackoverflow.com/users/641534/antonchanning"
			});
			creating.then(onCreated, onError);
		});
		//test to show we can actually open a tab successfully
		var creating = browser.tabs.create({
			url:"https://stackexchange.com/users/322227/antonchanning"
		});
		creating.then(onCreated, onError);
	}
	window.close();
});
