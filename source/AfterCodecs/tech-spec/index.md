---
title: Technical spec
product: AfterCodecs
order: 2
---

# Technical spec

## Requirements

* Mac OSX : version >= 10.10
* Microsoft Windows : version 7/8/10
* Adobe CC 2014 to 2019 included

## Codecs

* ProRes : 6 official profiles (422 LT / Proxy / Normal / HQ / 4444 / XQ ) and two unofficial profiles (422 Ultra and 4444 Light). ProRes 4444 Light / 4444 / XQ supports the Alpha Channel.
* HAP GPU accelerated codecs : 4 codecs (Hap, Hap Alpha, Hap Q and Hap Q Alpha), you can choose if you want to compress frames and how many CPU chunks you need, and for Hap and Hap Alpha you can choose your compression algorithm (each have their own tradeoff between speed and quality !)
* x264 : best H264 / AVC implementation, outperforming both Adobe Media Encoder and QuickTime H264. A special easy-to-use Youtube Upload profile is provided.
* x265 : files are ~25% lighter than x264 for the same quality, but slower encoding
* x264 RGB : same as x264 but avoids YUV colorspace, best for storing separate channels in one video (UV map, Alphas...) for power users only.


## Known Limitations

* AE on OSX : Rendering multiple output modules in parallel for the same queue item doesn't work
* Interlacing : lower field first in H264 recognized as top field first by Adobe
* **Don't use the ProRes for broadcast. Always test your hardware and software.** It is a reverse engineered version of ProRes not approved by Apple ; for example ProRes 4444's Alpha channel doesn't seem to be accepted by Blackmagic Hyperdeck Studio Mini.
* There seem to be an issue with High DPI screens on OSX (4K / 5K), press `SHIFT+ESC` to put the window back in the top left corner


## Resolutions accepted
* For x264 Quality < 100 and x265, dimensions of the video must be even (=> odd resolutions will fail)