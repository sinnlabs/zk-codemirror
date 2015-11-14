/**
 * 
 */
function (out) {
	//out.push('<style>.CodeMirror { width: 100% !important; height: 100% !important; }</style>');
	out.push('<div', this.domAttrs_(),  '><textarea id="', this.uuid,  
		 '-codemirror">', this.getText(), '</textarea></div>');
}