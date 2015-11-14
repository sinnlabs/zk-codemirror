# zk-codemirror
Integration of Codemirror library in ZK 7 framework

##Usage

```xml
<?page title="ZK Code mirror example"?>
<window title="ZK Code mirror example" border="normal" mode="overlapped" sizable="true">
	<hlayout vflex="1">
		<codemirror id="s" hflex="1" vflex="1" mode="javascript" 
			value="function abc() {}"></codemirror>
	</hlayout>
	<hlayout>
		<div hflex="1"></div>
		<button label="ok" onClick="alert(s.getText())" />
		<button label="mode" onClick='s.setMode("text/x-java");'/>
	</hlayout>
</window>
```

## Supported modes

*  HTML mode = "text/html";
*  JAVA mode = "x-java";
*  JAVASCRIPT mode = "text/javascript";
*  C mode = "text/x-csrc";
*  CPP mode = "text/x-c++src";
*  OBJECTIVE_C mode = "text/x-objectivec";
*  SCALA mode = "text/x-scala";
*  KOTLIN mode = "text/x-kotlin";
*  CEYLON mode = "text/x-ceylon";
*  CSHARP mode = "text/x-csharp";
*  JSON mode = "application/json";
*  LD_JSON mode = "application/ld+json";
*  TYPESCRIPT mode = "text/typescript";
*  CSS mode = "text/css";
*  SCSS mode = "text/x-scss";
*  LESS mode = "text/x-less";
*  XML mode = "application/xml";