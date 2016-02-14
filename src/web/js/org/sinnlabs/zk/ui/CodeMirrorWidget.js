/**
 * CodeMirrorWidget.js
 * Purpose:
 * 
 * Description:
 * 
 * History:
		Tue Nov 15 14:47:28     2015, Created by peter.liverovsky
 * Copyright (C) 2015 Sinnlabs LTD. All Rights Reserved.
 * This program is distributed under LGPL Version 2.1 in the hope that
 * it will be useful, but WITHOUT ANY WARRANTY.
*/

zk.$package('org.sinnlabs.zk.ui');

(function () {

	function stopOnChanging_(wgt) {
		if (wgt._tChg) {
			clearTimeout(wgt._tChg);
			wgt._tChg = null;
		}
	}
	
	function startOnChanging_(wgt) {
		stopOnChanging_(wgt);
		wgt._tChg = setTimeout(wgt.proxy(onChanging_), zul.inp.InputWidget.onChangingDelay);
	}
	
	function onChanging_() {
		this.fireOnChange();
	}

	var SourceWidget =
		/**
		 * <p>The delay to send the onChanging event is controlled by
		 * {@link #onChangingDelay}, which is default to 350.
		 * To change it, you can specify the following in a ZUL file.
		 * <pre><code>
		   &lt;?script content="zk.afterLoad('zul.inp',function(){zul.inp.InputWidget.onChangingDelay=1000;})"?&gt;
		   </code></pre>
		 */
		org.sinnlabs.zk.ui.CodeMirrorWidget = zk.$extends(zul.inp.Textbox, {

			_codemirror: null,
			
			_mode: "text/html",

			$init: function () { 
				this.$supers('$init', arguments);
				zWatch.listen({onSize: [this, this.onSize_]});
			},

			bind_: function (dt, skipper, after) {
				this.$supers('bind_', arguments);
				var wgt = this;
				_codemirror =  CodeMirror.fromTextArea(this.$n('codemirror'), {
					lineNumbers: true,
					mode: wgt._mode,
					matchBrackets: true
				});
				_codemirror.on('blur', function () {
					var val = _codemirror.getValue();
					wgt.setValue(val);
					if (wgt._tChg) {
						clearTimeout(wgt._tChg);
						wgt._tChg = null;
					}
					wgt.fireOnChange();
				});
				_codemirror.on('keydown', function (evnt) {
					stopOnChanging_(wgt); //wait for key up
				});
				_codemirror.on('keyup', function (evnt) {
					startOnChanging_(wgt);
				});
				this._multiline = true;
				zWatch.listen({onSize: this});
				this.refresh();
			},
			
			unbind_: function () {
				this.$supers('unbind_', arguments);
				zWatch.unlisten({onSize: this});
			},

			fireOnChange: function () {
				var val = _codemirror.getValue();
				this.setValue(val);
				this.fire('onChange', {value: val}, {toServer: true});
			},
			
			onSize: function (e) {
				this.refresh();
			},
			
			setMode: function (val) {
				if (this._mode != val) {
					this._mode = val;
					if (this._codemirror) {
						_codemirror.setOption("mode", _mode);
					}
				}
			},
			
			getMode: function() {
				return _mode;
			},
			
			refresh: function() {
				$('.CodeMirror').each(function(i, el){
				    el.CodeMirror.refresh();
				});
			}
		});
})();