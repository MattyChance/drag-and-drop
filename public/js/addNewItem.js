//this function makes the button add another item 
//it also counts how many items there are in the list

import sortable from './sortable.js';

function addNewItem() {
	var listLength = document.getElementById('list').children.length;

	if (listLength >= 10) {
		alert('Sorry! you can only have ten items!')
	} else {

		var newItem = document.createElement('li');
		document.getElementById('list').appendChild(newItem);
	}
	
	sortable(document.getElementById('list'), function(item) {
		return;
	});

}

export default addNewItem;