---
title: "QuickTime Is Dead : How To Export HAP from Adobe AE, PP & ME ?"
date: 2018-04-07 14:08:10
author: Antoine
poster: /images/Poster4_b.png
thumbnail: /images/Poster4.png
tags:
- AfterCodecs
---
Adobe finally dropped support for Quicktime but we have a working solution for exporting HAP codecs !

<!-- more -->

# What happened

[Adobe warned for years](https://theblog.adobe.com/quicktime-on-windows/) that Quicktime support was going away. Quicktime is abandoned by Apple (replacing it AVFoundation) and pose some serious security threats to its users.

In the latest April release of Adobe video softwares, [Adobe decided to drop support for the Quicktime exporter](https://helpx.adobe.com/x-productkb/multi/quicktime7-support-dropped.html). Animation, ProRes and DNxHD are still available but codecs that were coded as Quicktime extensions don't work anymore, such as [HAP codecs](https://vdmx.vidvox.net/blog/hap).

# How to export HAP codecs from After Effects ?

[AfterCodecs](/aftercodecs/) is a new native plugin for Adobe After Effects for both OSX and Windows that brings **fast and efficient codecs to AE's render queue**. It supports HAP codecs, with Snappy lossless compression and CPU chunks for multi threaded decompression. 

It is available through [aescripts + aeplugins Website](https://aescripts.com/aftercodecs/), click ``TRY``, download, unzip and perform the automatic installation. Don't forget to read the ``PDF`` !


# And for Premiere Pro and Media Encoder ?

AfterCodecs for Premiere Pro and Media Encoder is coming soon.

# Is .MOV Dead to ?

No, MOV is a standard still written and read by most video software and unaffected by Adobe and Apple decisions.

Happy rendering !