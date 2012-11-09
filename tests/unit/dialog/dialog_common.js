TestHelpers.commonWidgetTests( "dialog", {
	defaults: {
		autoOpen: true,
		buttons: {},
		closeOnEscape: true,
		closeText: 'close',
		disabled: false,
		dialogClass: '',
		draggable: true,
		height: 'auto',
		hide: null,
		maxHeight: false,
		maxWidth: false,
		minHeight: 150,
		minWidth: 150,
		modal: false,
		position: {
			my: 'center',
			at: 'center',
			of: window,
			collision: 'fit',
			using: $.ui.dialog.prototype.options.position.using
		},
		resizable: true,
		show: null,
		title: '',
		width: 300,

		// callbacks
		beforeClose: null,
		close: null,
		create: null,
		drag: null,
		dragStart: null,
		dragStop: null,
		focus: null,
		open: null,
		resize: null,
		resizeStart: null,
		resizeStop: null
	}
});
