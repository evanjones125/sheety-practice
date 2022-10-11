// Wait for page to load
document.addEventListener('DOMContentLoaded', function(event) {
	ready();
})

function ready() {
	let url = 'https://api.sheety.co/phill/cluckerRestaurant/menuItems';
	fetch(url)
	.then((response) => response.json())
	.then(json => {
		// Group menu items by their category
		let groupedMenu = _.groupBy(json.menuItems, 'category');
		// Create a Handlebars template to render items
		var template = Handlebars.compile(document.getElementById("menu-template").innerHTML);
		// Render items into Handlebars template, and set the html of the container element
		document.getElementById('menu').innerHTML = template(groupedMenu);
	});
}