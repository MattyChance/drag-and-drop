//deleting the item that is dragged into drop-area

import sortable from './sortable.js'; 

function deleteZone(el) {

	el.addEventListener('dragenter', function(e) {
		e.preventDefault();
	})
	el.addEventListener('dragover', function(e) {
		e.preventDefault();
	})
  	el.addEventListener('drop', function(e) {
  		e.preventDefault();
  		var data = e.dataTransfer.getData('Text');
  		document.getElementById(data).remove();

	})
	sortable(document.getElementById('list'), function(item) {
			return;
	});
	
}

export default deleteZone;