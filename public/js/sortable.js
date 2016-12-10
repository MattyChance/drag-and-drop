//Use the native Javascript API Drag
function sortable(rootElements, onUpdate) {
   var dragElement;
   //make all ul li elements movable and give them unique id
   [].slice.call(rootElements.children).map(function (itemElement, index) {
      itemElement.draggable = true;
      itemElement.id = index;
      itemElement.innerHTML = "Item " + parseInt(index + 1);
   });

   // sorting function
   function _onDragOver(event) {
       event.preventDefault();
       event.dataTransfer.dropEffect = 'move';

       var target = event.target;
       if (target && target !== dragElement && target.nodeName == 'LI') {
           // Sorting
           var rect 
           rootElements.insertBefore(dragElement, rootElements.children[0] !== target && target.nextSibling || target);
       }
   }

   // End of sorting
   function _onDragEnd(event){
       event.preventDefault();

       dragElement.classList.remove('onGrab');
       dragElement.removeEventListener('dragover', _onDragOver, false);
       dragElement.removeEventListener('dragend', _onDragEnd, false);


       // console log what was dragged
       onUpdate(dragElement);
   }

   // Sorting starts
   rootElements.addEventListener('dragstart', function (event){
       dragElement = event.target; // Remembering an element that will be moved

       // Limiting the movement type
       event.dataTransfer.effectAllowed = 'move';
       event.dataTransfer.setData('Text', dragElement.id);


       // Subscribing to the events 
       rootElements.addEventListener('dragover', _onDragOver, false);
       rootElements.addEventListener('dragend', _onDragEnd, false);


       setTimeout(function () {
           // If this action is performed without setTimeout, then
           // the moved object will be of this class.
           dragElement.classList.add('onGrab');
       }, 0)
   }, false);
}

export default sortable;


