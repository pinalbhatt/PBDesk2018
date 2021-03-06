---
title: 'C# : Enum – Tricks & Tips'
tags: [ C# ]
categories:
  - Programming
date: 2008-02-20
---
<p align="justify">This is not a beginners tutorial for concept of Enum. Its is assumed that you are aware of the basic concepts of enum. Here I am presenting few advance level tricks and tips which programmers often need while working with enums. For basic tutorial on enum you can visit <a href="http://www.csharp-station.com/Tutorials/Lesson17.aspx" target="_blank">The C# Station Tutorial (Lesson 17: Enums)</a> or msdn at <a title="http://msdn.microsoft.com/en-us/library/sbbt4032(VS.80).aspx" href="http://msdn.microsoft.com/en-us/library/sbbt4032(VS.80).aspx">http://msdn.microsoft.com/en-us/library/sbbt4032(VS.80).aspx</a></p>
<p align="justify">All enum instances in .net implicitly inherit the System.Enum type in the Base Class Library and hence we can use members of System.Enum with the instances of enums. There are few good functionalities available in System.Enum which are often required while working with enums and for manipulating&#160; them. So lets have look on them one by one.</p>
<p align="justify">One of the common requirement is to cast the enum object to and fro between its integer and string values. Consider following sample code:</p>
<div style="border-bottom: silver 1px solid; text-align: left; border-left: silver 1px solid; padding-bottom: 4px; line-height: 12pt; background-color: #f4f4f4; margin: 20px 0px 10px; padding-left: 4px; width: 97.5%; padding-right: 4px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; max-height: 200px; font-size: 8pt; overflow: auto; border-top: silver 1px solid; cursor: text; border-right: silver 1px solid; padding-top: 4px">
<div style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px">
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">   1:</span> <span style="color: #0000ff">public</span> <span style="color: #0000ff">enum</span> ColorSwatch</pre>
<p><!--CRLF--></p>
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">   2:</span>    {</pre>
<p><!--CRLF--></p>
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">   3:</span>        Black = 0,</pre>
<p><!--CRLF--></p>
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">   4:</span>        Red = 1,</pre>
<p><!--CRLF--></p>
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">   5:</span>        Green = 2,</pre>
<p><!--CRLF--></p>
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">   6:</span>        Blue = 3,</pre>
<p><!--CRLF--></p>
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">   7:</span>        Yellow = 4,</pre>
<p><!--CRLF--></p>
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">   8:</span>        Orange = 5,</pre>
<p><!--CRLF--></p>
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: white; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">   9:</span>        Pink = 6</pre>
<p><!--CRLF--></p>
<pre style="border-bottom-style: none; text-align: left; padding-bottom: 0px; line-height: 12pt; border-right-style: none; background-color: #f4f4f4; margin: 0em; padding-left: 0px; width: 100%; padding-right: 0px; font-family: &#39;Courier New&#39;, courier, monospace; direction: ltr; border-top-style: none; color: black; font-size: 8pt; border-left-style: none; overflow: visible; padding-top: 0px"><span style="color: #606060">  10:</span>    }</pre>
<p><!--CRLF--></div>
</div>
<div>int to Enum</div>
<div>This casting is the simple one.</div>
<div>&#160;&#160;&#160;&#160;&#160; int colorCode = 2;<br />
  <br />&#160;&#160;&#160;&#160;&#160; <strong>ColorSwatch</strong> selectedColor = (<strong>ColorSwatch</strong>)colorCode;</p>
<p></div>
<div>OR</div>
<div><strong>ColorSwatch</strong> c;</p>
<p>c = (<strong>ColorSwatch</strong> )Enum.ToObject(typeof(<strong>ColorSwatch</strong> ), colorCode)</div>
<p></p>
<div>Enum to int</div>
<div>Once again this is a simple cast.</div>
<div>&#160;&#160;&#160; <strong>ColorSwatch</strong> cs = ColorSwatch.Orange;</p>
<p>&#160;&#160;&#160; int c = (int)cs;</p>
<p></div>
<p>As per this code, integer variable c should now have integer value associated with Orange. </p>
<p></p>
<div>string to Enum</div>
<div>This cast is the tricky one and can be done in following way:</div>
<div>&#160;&#160;&#160;&#160; string colorStr = &quot;blue&quot;;<br />
  <br />&#160;&#160;&#160;&#160; bool ignoreCase = true;</p>
<p>&#160;&#160;&#160;&#160; <strong>ColorSwatch</strong> CC =&#160;&#160;&#160; (<strong>ColorSwatch</strong>)Enum.Parse(typeof(<strong>ColorSwatch</strong>), </p>
<p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; colorStr, ignoreCase);</p>
<p></div>
<div>But this code will throw an argument exception if the string value is either an empty string or only contains white space or is a name, but not one of the named constants defined for the enumeration. This exception can be avoided using <strong>IsDefined</strong>() method as follow:</div>
<div>if (<strong>Enum.IsDefined</strong>(typeof(ColorSwatch), colorStr))</p>
<p>{</p>
<p>&#160;&#160;&#160; ColorSwatch CC = (ColorSwatch)Enum.Parse(typeof(ColorSwatch), </p>
<p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; colorStr,&#160;&#160;&#160;&#160; ignoreCase);&#160; <br /> }</div>
<p></p>
<div>Enum to string</div>
<div>Again this is the most simple one. Just using ToString() method gives us string value corresponding to the enum object.</div>
<p>
  <br />Below are few other important functionalities available under System.Enum which are often useful :</p>
<div>
<div>Othre methods from System.Enum</div>
<div>
<ul>
<li>Enum.GetName() : </li>
</ul>
<p>Retrieves the name(string) of the constant in the specified enumeration that has the specified value.</p>
<li>Enum.GetNames() :
<p>Retrieves an array of string of the names of the constants in a specified enumeration. The elements of the return value array are sorted by the values of the enumerated constants.</p>
</li>
<li>Enum.GetValues() :
<p>Retrieves an array of the values of the constants in a specified enumeration.</li>
</p></div>
</div>