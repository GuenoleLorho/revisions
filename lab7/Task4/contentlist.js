
function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	/*
	//using innerHTML
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>";
	console.log(items_html);
	document.getElementById('content').innerHTML = items_html;
	*/

	//using appendChild
	var items_html = document.createElement("ul");
	for (var i=0; i < items.length; i++) {
		item = items[i];
		//items_html += "<li>" + item + "</li>";
		var li = document.createElement("li");
		var item_node = document.createTextNode(item);
		//var li_fin = document.createElement("/li");
		li.appendChild(item_node);
		items_html.appendChild(li);
	};
	var old_list = document.getElementById('content');
	old_list.appendChild(items_html);
}
/*	not quite there yet
function removeContent () {
	//var last_item = document.getElementById('id')
	var entries = document.body.getElementsByTagName('ul');
	//console.log("louie's name: " + entries.attribute[0].value);
//	document.body.insertBefore(entries[2], entries[0]);

	var newPara2 =document.createElement("p");
	var text2 = document.createTextNode("Aggretion");
	newPara2.appendChild (text2);
	document.body.replaceChild(newPara2, entries);
*/

}
