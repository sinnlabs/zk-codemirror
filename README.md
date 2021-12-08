# zk-codemirror
Integration of Codemirror library for ZK 7 framework

This project provides an integration of the original CodeMirror-Library (developed by Marijn Haverbeke on [http://codemirror.net](http://codemirror.net)) for the [ZK7-framework](http://zkoss.org).</br>
What is CodeMirror? "CodeMirror is a JavaScript library that can be used to create a relatively pleasant editor interface for code-like content - computer programs, HTML markup, and similar. If a parser has been written for the language you are editing (see below for a list of supported languages), the code will be coloured, and the editor will help you with indentation." (Quote from http://codemirror.net)

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

## Maven

Add the following block to the dependencies

```xml
<dependency>
	<groupId>org.sinnlabs</groupId>
	<artifactId>zk-codemirror</artifactId>
	<version>0.7</version>
</dependency>
```

## Supported modes

*  HTML mode = "text/html";
*  JAVA mode = "text/x-java";
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
*  ASCIIDOC mode = "text/asciidoc";
*  SQL mode = "text/x-sql";
*  MYSQL mode = "text/x-mysql";
*  MARIADB mode = "text/x-mariadb";
*  CASANDRA mode = "text/x-cassandra";
*  PLSQL mode = "text/x-plsql";
*  MSSQL mode = "text/x-mssql";
*  HIVE mode = "text/x-hive";
*  PGSL mode = "text/x-pgsql";
*  GQL mode = "text/x-gql";
*  GQSQL mode = "text/x-gpsql";
*  ESPER mode = "text/x-esper";
