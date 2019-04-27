---
title: FAQ
product: AfterCodecs
order: 4
---

# F.A.Q.

## What playback software do you recommend ?
We recommend the open-source [DJV_view media review software](http://djv.sourceforge.net), it has RAM playback, frame-by-frame scrubbing and a lot of others features, check it out and install it !

You can also use the latest versions of [VLC Media Player](https://www.videolan.org/vlc/) and [Media Player Classic](https://mpc-hc.org/).

## Quicktime is dead !
Yes that's why there is AfterCodecs ! It doesn't need Quicktime (and never will) to run so you should be safe now ;) 
## There's an issue with my render, what should I do ?
Please open a [new ticket about AfterCodecs](https://aescripts.com/contact/), don't forget to send the .log file generated by AfterCodecs and information about your setup !
Please also make sure that you are not using a forbidden resolutions, see [Technical specs](/AfterCodecs/tech-spec/)
## The ffmpeg download doesn't work, what should I do ?
Retry the download button or follow the manual instruction in the .pdf given with the AfterCodecs downloaded archive.
## Quicktime Player doesn't play my video !
Be sure to be using x264 (and not x264 RGB or x265), with the quality slider <= 98. If it still doesn't work, lower the quality or bitrate, or choose the H264 Main Profile
## Can I use my own ffmpeg command line ?
Not yet, sorry. If you want to discuss this feature and what you need, please open a new ticket :)
## Is x264 different from H264 ?
H264 is the norm and x264 a software encoder that implements H264, faster and of better quality than encoders from Adobe or Quicktime
## AE : How do I render in 16 bit per channel ?
Be sure to set your AE project in 16 bpc, it will export to AfterCodecs in 16 bpc (even if you select "Millions of Colors" instead of "Trillions of Colors")
## Where are the HAP codecs ?
Select "[A] Hap" or "[A] Hap Q" and export in RGB in the AE settings. Exporting in `RGB+Alpha` on AE (or ticking `Export Alpha Channel` on PPro / AME) will automatically switch the codec to Hap Alpha or Hap Q Alpha !