//import the sortable module
import sortable from './sortable.js';
import addNewItem from './addNewItem.js'
import deleteZone from './deleteItem.js'
import handleDragStart from './dragStyleHandler.js'

sortable(document.getElementById('list'), function(listItem) {
	console.log(listItem);
});

document.getElementById('button').onclick = addNewItem;


deleteZone(document.getElementById('drop-area'));

