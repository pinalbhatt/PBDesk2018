---
title: 'C# Code Snippet to Send Email'
tags: [C#, ]
categories:
  - CodeSnippet
date: 2014-09-20 13:36:22
---
<p>Microsoft.Net framework provides <a title="System.Net.Mail Namespace" href="http://msdn.microsoft.com/en-us/library/System.Net.Mail.aspx" target="_blank"><strong>System.Net.Mail</strong> Namespace</a> for handling SMTP and email related utilities. <a href="http://msdn.microsoft.com/en-us/library/system.net.mail.smtpclient.aspx" target="_blank"><strong>SmtpClient</strong> class</a> allows applications to send e-mail by using the Simple Mail Transfer Protocol (SMTP) where as <a href="http://msdn.microsoft.com/en-us/library/system.net.mail.mailmessage.aspx" target="_blank"><strong>MailMessage</strong> class</a> represents an e-mail message that can be sent using the SmtpClient class.</p>
<blockquote><p>Please note that <strong>System.Web.Mail</strong> namespace should not be used any more as most of the functionalist in this namespace are now <strong>obsolete</strong>.</p></blockquote>
<p>Here are few code snippets to send email in C# using SMTP:</p>
<p>Gist to Send email via Gmail</p>
{% gist pinalbhatt/48f625bbffcdf8849f4a SendEmailViaGmail.cs %}
<p>And if you want to attach a file, here is code to send email with attachment:</p>
{% gist pinalbhatt/48f625bbffcdf8849f4a SendEmailWithAttachment.cs %}