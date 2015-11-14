/** 
 * CodeMirror.java
 * 
 * Copyright (C) 2015 Sinnlabs LTD. All Rights Reserved.
 * 
 * {{IS_RIGHT
 *   This program is distributed under LGPL Version 2.1 in the hope that
 *   it will be useful, but WITHOUT ANY WARRANTY.
 * }}IS_RIGHT
 */
package org.sinnlabs.zk.ui;

import java.io.IOException;

import org.zkoss.zk.ui.sys.ContentRenderer;
import org.zkoss.zul.Textbox;

/**
 * Class represents source editor component for ZK framework
 * @author peter.liverovsky
 *
 */
public class CodeMirror extends Textbox {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6278831344472300331L;
	
	public static final String TEXT_HTML = "text/html";
	
	public static final String JAVA = "x-java";
	
	public static final String JAVASCRIPT = "text/javascript";
	
	public static final String C = "text/x-csrc";
	
	public static final String CPP = "text/x-c++src";
	
	public static final String OBJECTIVE_C = "text/x-objectivec";
	
	public static final String SCALA = "text/x-scala";
	
	public static final String KOTLIN = "text/x-kotlin";
	
	public static final String CEYLON = "text/x-ceylon";
	
	public static final String CSHARP = "text/x-csharp";
	
	public static final String JSON = "application/json";
	
	public static final String LD_JSON = "application/ld+json";
	
	public static final String TYPESCRIPT = "text/typescript";
	
	public static final String CSS = "text/css";
	
	public static final String SCSS = "text/x-scss";
	
	public static final String LESS = "text/x-less";
	
	public static final String XML = "application/xml";
	
	private String _mode = TEXT_HTML;

	public CodeMirror() {
		super();
		this.setZclass("z-div");
	}
	
	public CodeMirror(String value) {
		super(value);
		setZclass("z-div");
	}
	
	/**
	 * Returns syntax mode
	 * @return
	 */
	public String getMode() {
		return _mode;
	}
	
	/**
	 * Sets the syntax mode name
	 * @param name - Mode name
	 */
	public void setMode(String name) {
		_mode = name;
		smartUpdate("mode", _mode);
	}
	
	@Override
	protected void renderProperties(ContentRenderer renderer) throws IOException {
		super.renderProperties(renderer);
		render(renderer, "mode", _mode);
	}
}
