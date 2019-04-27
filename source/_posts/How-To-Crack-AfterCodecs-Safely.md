---
title: How to Crack AfterCodecs Safely
date: 2017-11-21 20:46:25
author: Antoine
tags:
- AfterCodecs
hidden: true
---
Ahoy, Pirates! In this post you will learn how to safely download a cracked version of our product AfterCodecs and check that the cracked plugin is virusless.

<!-- more -->

## What is AfterCodecs ?

[AfterCodecs](/aftercodecs/) is a new native plugin for Adobe After Effects for both OSX and Windows that brings **fast and efficient codecs to AE's render queue**.

{% img has-shadow /images/Afc_AME_Comp.gif %}

AfterCodecs is currently the best option out there to **encode ProRes files on Windows** directly from AE and the best & fastest way to **encode H.264 / H.265 videos for YouTube** / Vimeo / Web streaming / sending to your client a lightweight and good looking render.

You can buy AfterCodecs on [aescripts + aeplugins](https://aescripts.com/aftercodecs/). If you thought about **getting it illegaly**, we prepared for you a guide in 5 easy steps, trying to minimize the risks for you and your computer. We wouldn't want you to get a nasty virus ! Remember, **software crackers are incentized to retrieve money and information about you**, and giving you a virus is a good way to achieve that goal.

## AfterCodecs Cracking Guide

### 1) First, find a crack

As you can guess it all starts by looking on your favorite search engine for ``aftercodecs crack``. Be sure to use a browser extension like uMatrix or NoScript in order to be minimally protected when surfing on underground forums and clicking potentially dangerous links.

{% img has-shadow /images/0/Crack_Sites.jpg %}

You will most likely stumble upon some VFX-related piracy forums : follow links and try to download an archive of the cracked AfterCodecs. The file extension should be ``.zip`` or ``.rar`` or ``.7z``. You should NOT be downloading an executable (``.exe`` file on Windows), this will definitely be a virus. Now, rename your downloaded archive and suffix it with ``_cracked`` so you can remember later that this archive is the dangerous one you should inspect.

### 2) Download original

Once you've downloaded the cracked AfterCodecs archive, you should also download the official AfterCodecs plugin in order to compare them and be sure you're not running a virus. Go to [aescripts + aeplugins](https://aescripts.com/aftercodecs/) and click ``TRY``.

{% img has-shadow /images/0/Aescripts.jpg %}

### 3) Unzip safely the crack

Third step, unzip both archives in their own folder with your OS's built-in unzipper or a software like 7-Zip. Warning : this operation is dangerous as the crackers could exploit a bug in the unzipper software. **This guide cannot guarantee you 100% chance of not getting a virus**. If you're really afraid of getting a virus, stop at this step or use a [Virtualbox](https://www.virtualbox.org/). Once unzipped you should have an ``.aex`` file (Windows) or ``.plugin`` bundle folder (OSX) that is the plugin. If you find an executable and really want to use it safely you should setup a [Virtualbox](https://www.virtualbox.org/) and run it inside it (less than an hour to do).

### 4) Check the differences with the original

Now that you unzipped both plugins, you should check that the two plugins have exactly the same size like in this screenshot (4 lines) :

{% img has-shadow /images/0/Crack_Size_Comparison.jpg %}

If they don't : it means that the crackers could have added their own code to the plugin, and it's not good for you. My advice would be to not use this cracked version of AfterCodecs.

Now if the two plugins filesizes matches, what you should do to ensure that the crackers only removed the license protection from AfterCodecs is to look at the difference between the two files. It's the most painful step but **you can't be too careful** about theses things.

Here what's you should do on Windows : Shift + Right Click in your folder and click "Open Powershell here" or something like "Open window command prompt here" and then type ``fc.exe /b AfterCodecs.v.1.2.0.aex AfterCodecs.v.1.2.0_cracked.aex`` (replace the filenames with yours of course !) and finally ``Enter``.

{% img has-shadow /images/0/Crack_Binary_Comparisons.jpg %}

You should obtain something very similar as in this screenshot : it means only a few characters have been changed in the plugin, removing only the license protection. If more characters are changed there could be a threat !

### 5) Install it and done !
Now that the file seems fine you should install it manually by copying the ``.aex`` file (Windows) or ``.plugin`` bundle folder (OSX) into your Plugins directory of your After Effects installation folder.

There's one last step you should be careful about. You need ffmpeg to use AfterCodecs. **Do NOT use a ffmpeg provided by crackers** whether in the archive you downloaded or by clicking "Download ffmpeg" in the Settings tab of AfterCodecs cracked. The crackers could have changed the ffmpeg binaries and put their virus inside it. You should [go at the bottom of this page](https://aescripts.com/aftercodecs/) download the ffmpeg and follow the manual installation PDF.

## Get support and new features !

Happy rendering ! Don't forget, it's never too late to buy AfterCodecs, **get support for your bugs and get the latest versions automatically**. We plan on making **AfterCodecs even better and faster** and we need resources in order to do so.

With your financial help we could for example :
- Add support for more codecs and options ;
- Add special After Effects features to make your life easier (Quick rendering, Multiple-AE-processes rendering, etc.) ;
- Add the support for a custom ffmpeg command line ;
- Create a desktop version of AfterCodecs with batch rendering features ;
- Cover more video production softwares ;
- etc.
