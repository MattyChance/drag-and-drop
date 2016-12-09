/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _sortable = __webpack_require__(1);
	
	var _sortable2 = _interopRequireDefault(_sortable);
	
	var _addNewItem = __webpack_require__(2);
	
	var _addNewItem2 = _interopRequireDefault(_addNewItem);
	
	var _deleteItem = __webpack_require__(3);
	
	var _deleteItem2 = _interopRequireDefault(_deleteItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _sortable2.default)(document.getElementById('list'), function (listItem) {
		console.log(listItem);
	}); //import the sortable module
	
	
	(0, _addNewItem2.default)(document.getElementById('button'));
	
	(0, _deleteItem2.default)(document.getElementById('drop-area'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
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
	            var rect;
	            rootElements.insertBefore(dragElement, rootElements.children[0] !== target && target.nextSibling || target);
	        }
	    }
	
	    // End of sorting
	    function _onDragEnd(event) {
	        event.preventDefault();
	
	        dragElement.classList.remove('onGrab');
	        dragElement.removeEventListener('dragover', _onDragOver, false);
	        dragElement.removeEventListener('dragend', _onDragEnd, false);
	
	        // console log what was dragged
	        onUpdate(dragElement);
	    }
	
	    // Sorting starts
	    rootElements.addEventListener('dragstart', function (event) {
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
	        }, 0);
	    }, false);
	}
	
	exports.default = sortable;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _sortable = __webpack_require__(1);
	
	var _sortable2 = _interopRequireDefault(_sortable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addNewItem(el) {
		el.onclick = function () {
			var listLength = document.getElementById('list').children.length;
	
			if (listLength >= 10) {
				alert('Sorry! you can only have ten items!');
			} else {
	
				var newItem = document.createElement('li');
				document.getElementById('list').appendChild(newItem);
			}
			(0, _sortable2.default)(document.getElementById('list'), function (item) {
				return;
			});
		};
	} //this function makes the button add another item 
	//it also counts how many items there are in the list
	
	exports.default = addNewItem;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _sortable = __webpack_require__(1);
	
	var _sortable2 = _interopRequireDefault(_sortable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function deleteItem(el) {
	
		el.addEventListener('dragenter', function (e) {
			e.preventDefault();
		});
		el.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		el.addEventListener('drop', function (e) {
			e.preventDefault();
			var data = e.dataTransfer.getData('Text');
			document.getElementById(data).remove();
		});
		(0, _sortable2.default)(document.getElementById('list'), function (item) {
			return;
		});
	} //deleting the item that is dragged into drop-area
	
	exports.default = deleteItem;

/***/ }
/******/ ]);
//# sourceMappingURL=app-bundle.js.map