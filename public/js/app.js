//import the sortable module
import sortable from './sortable.js';
import addNewItem from './addNewItem.js'
import deleteItem from './deleteItem.js'

sortable(document.getElementById('list'), function(listItem) {
	console.log(listItem);
});

addNewItem(document.getElementById('button'));

deleteItem(document.getElementById('drop-area'));