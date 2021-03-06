---
title: ASP.Net MVC 6 - Whats New?
tags: [MVC6, WebAPI]
categories:
  - ASP.Net
date: 2014-11-05
image: MVC6-720x340.jpg
---
<p style="text-align: justify;">Asp.Net vNext (http://asp.net/vNext) is the official place where we learn about next generation of Microsoft's ASP.Net framework. As of 2014 vNext is MVC 6! Yes MVC 6 is the new cool major overhaul over previous ASP.Net. Recently, Microsoft announced the preview availability of this product.</p>
<blockquote><p>ASP.NET vNext is a lean and composable framework for building web and cloud applications. ASP.NET vNext is fully open source and available on <a href="http://github.com/aspnet/home" target="_blank">GitHub</a>.</p></blockquote>
<p style="text-align: justify;">MVC 6  has been redesigned from the ground up. The goal is to create a lean and composable .NET stack for building modern web/cloud-based apps. Microsoft has chosen a new direction, where the Web API, MVC and Web Pages framework are merged into one framework. This allows to remove a lot of the overlap between the three frameworks. And result of this change means that MVC can be self-hosting just like Web API.</p>
<p style="text-align: justify;">Yes, System.Web is very heavy &amp; quite expensive! A typical HttpContext object graph would consume about 30K of memory per request. With MVC 6's new design, its independent of System.Web now and the pre-request overhead drops to roughly 2K.</p>
<p style="text-align: justify;"> [stextbox id="black"]MVC, Web API, and Web Pages are merged into one framework, called MVC 6.[/stextbox]</p>
<p>Here are the highlights:</p>
<h3>Rebuilt from the Ground Up</h3>
<ul>
<li>MVC, Web API, and Web Pages are merged into one framework, called MVC 6. The new framework uses a common set of abstractions for routing, action selection, filters, model binding, and so on.</li>
<li>Dependency injection is built into the framework. Use your preferred IoC container to register dependencies.</li>
<li>vNext is host agnostic. You can host your app in IIS, or self-host in a custom process. (Web API 2 and SignalR 2 already support self-hosting; vNext brings this same capability to MVC.)</li>
<li>vNext is open source and cross platform.</li>
</ul>
<h3>Leaner, Faster</h3>
<ul>
<li>MVC 6 has no dependency on System.Web.dll. The result is a leaner framework, with faster startup time and lower memory consumption.</li>
<li>vNext apps can use a cloud-optimized runtime and subset of the .NET Framework. This subset of the framework is about 11 megabytes in size compared to 200 megabytes for the full framework, and is composed of a collection of NuGet packages.</li>
<li>Because the cloud-optimized framework is a collection of NuGet packages, your app can include only the packages you actually need. No unnecessary memory, disk space, loading time, etc.</li>
<li>Microsoft can deliver updates to the framework on a faster cadence, because each part can be updated independently.</li>
</ul>
<h3>True Side-by-Side Deployment</h3>
<p>The reduced footprint of the cloud-optimized runtime makes it practical to deploy the framework with your app.</p>
<ul>
<li>You can run apps side-by-side with different versions of the framework on the same server.</li>
<li>Your apps are insulated from framework changes on the server.</li>
<li>You can make framework updates for each app on its own schedule.</li>
<li>No errors when you deploy to production resulting from a mismatch between the framework patch level on the development machine and the production server.</li>
</ul>
<h3>New Development Experience</h3>
<p>vNext uses the <a href="http://msdn.microsoft.com/en-us/library/roslyn.aspx" target="_blank">Roslyn compiler</a> to compile code dynamically.</p>
<ul>
<li>You can edit a code file, refresh the browser, and see the changes without rebuilding the project.</li>
<li>Besides streamlining the development process, dynamic code compilation enables development scenarios that were not possible before, such as editing code on the server using <a href="http://azure.microsoft.com/en-us/documentation/videos/building-web-sites-with-visual-studio-online-monaco/" target="_blank">Visual Studio Online ("Monaco")</a>.</li>
<li>You can choose your own editors and tools.</li>
</ul>
<h3>Resources</h3>
<ul>
<li>
<h3><a class="icon icon-curricula" href="http://www.asp.net/vnext/overview/aspnet-vnext/getting-started-with-aspnet-vnext-and-visual-studio">Getting Started with ASP.NET vNext and Visual Studio "14"</a></h3>
<address class="details">By Tom Dykstra and Mike Wasson<span class="separator">|</span><time datetime="2014-10-06">October 6, 2014</time></address>
<p>An introduction to Visual Studio features for developing ASP.NET vNext applications. Walks you through creating a vNext project and deploying it to Azure.</li>
<li>
<h3><a class="icon icon-link" href="http://blogs.msdn.com/b/webdev/archive/2014/06/03/asp-net-vnext-in-visual-studio-14-ctp.aspx">ASP.NET vNext in Visual Studio “14” CTP</a></h3>
<p>Blog post with a comprehensive introduction to ASP.NET vNext. Includes an overview of features, a walkthrough showing how to use vNext in Visual Studio and from the command line, frequently asked questions, and links to additional resources.</li>
<li>
<h3><a class="icon icon-whitepaper" href="http://www.asp.net/vnext/overview/aspnet-vnext/overview">Getting Started with ASP.NET MVC 6</a></h3>
<address class="details">By Mike Wasson<span class="separator">|</span><time datetime="2014-10-06">October 6, 2014</time></address>
<p>An overview of the new ASP.NET MVC 6 framework, which unifies MVC, Web API, and Web Pages.</li>
</ul>