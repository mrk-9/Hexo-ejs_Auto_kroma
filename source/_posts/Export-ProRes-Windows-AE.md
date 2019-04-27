---
title: "After Effects : QuickTime ProRes Export on Windows Tutorial"
date: 2017-11-23 14:40:45
author: Antoine
thumbnail: /images/Poster1.jpg
tags:
- AfterCodecs
- ProRes
---

In this post I'll show you how to export QuickTime ProRes on Windows directly from After Effects render queue !

<!-- more -->
## AfterCodecs

[AfterCodecs](/aftercodecs/) is a **new plugin for After Effects** bringing new codecs directly from the render queue. It is available through [aescripts + aeplugins Website](https://aescripts.com/aftercodecs/), click ``TRY`` and perform the manual installation by reading the ``PDF`` given in the downloaded archive.

Now, render your composition and look into Output Module Settings. In the codecs list you will now be able to choose ``AfterCodecs .mov`` ! Click the ``Format Options`` button and now the AfterCodecs window pops up : you can select your ProRes flavor :

{% img /images/1/AfterCodecs_1.2.0_Screenshot_0.png %}

Don't forget to select ``RGB + Alpha`` if you want to export the Alpha Channel with ProRes 4444. You can now render ProRes directly from the render queue on Windows !

## Is this ProRes reliable ?
[AfterCodecs](/aftercodecs/) uses [ffmpeg](https://www.ffmpeg.org/) behing the hood. Some are concerned because ffmpeg ProRes encoder is not officially endorsed by Apple, the original creator of the ProRes codec. However, ffmpeg use is widespread among video professionals, even among VFX studios and TV channels in which quality control tests are required.

Here are the bugs we found about the way AfterCodecs ProRes is interpreted by After Effects :
- There is a color shift for AfterCodecs ProRes 422 (not ProRes 4444) in **After Effects CC 2014 on OSX** (when the video is re-imported back into AE) ;
- On Windows ProRes 4444 with **8 bit Alpha cannot be reimported in a 16 bpc AE project**. If you're working with 16 bpc compositions and need alpha, you should export the Alpha in 16 bit. This is a special [AfterCodecs](/aftercodecs/) feature to lighten your alpha renders, Alpha from Quicktime ProRes is always 16 bit !

Apart from these two After Effects bugs, **[AfterCodecs](/aftercodecs/) is fully compatible with After Effects CC 2015, 2017 and 2018** !

<!-- Sign up, or sign in if you already have an account, and install the [Official aescripts + aeplugins manager app](https://aescripts.com/learn/aescripts-aeplugins-manager-app/) -->
