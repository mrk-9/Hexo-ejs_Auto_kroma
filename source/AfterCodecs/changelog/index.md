---
title: Changelog
product: AfterCodecs
order: 3
---

# Changelog

## 1.6.1 (Current version)  -  March 25 2019
   * H264 Low resolution color shift when re-imported into Adobe softwares fixed (in the Encoding Options popup a message will now tell you if the rendered file will be re-importable into Adobe softwares or not)
   * PPro / AME :
      - Individual audio tracks options Mac OSX bug fix
      - You can now export audio in 4.0 ambisonic WYZX / WYXZ formats
      - Filesize estimations for HAP codecs improved
   * Misc bug fixes
   * Using ffkroma 4.1-100 please update if you're not using the Windows installer

## 1.6.0 -  February 28 2019
   * VR360 tag your renders automatically ! On PPro / AME CC 2019+ "Auto" will detect 360 / 3D footage automatically but you can also choose manually "Monoscopic", "Stereoscopic Left-Right" or "Stereoscopic Top-Bottom"
   * Experimental GIF encoder (extension will automatically change to .gif, cannot contain audio)
   * New global options : 
      - Disable AVX512 (Intel accelerated instructions) that seem to be the source of crash on some workstations
      - Append encoding options to render's filename
   * Bugs fix :
      - Hap Q Alpha No Snappy was buggy
      - OSX : editing Quality, Speed, GOP input values with keyboard is possible again
      - OSX : H265 / HEVC can be opened in Quicktime Player now
   * Our new product BRAW Studio can be licensed from AfterCodecs and vice-versa
   * Using ffkroma 4.1-99 please update if not using the Windows installer

 ---------------------------------------

## 1.5.1  -  November 26 2018
   * Using ffkroma 4.1-84 and not using ffmpeg anymore, you can delete the old ffmpeg executable it if you want
   * All color shifts with ProRes codecs are fixed now, please update !
   * H264 / H265 : 8 bpc / 10 bpc, TV Range / Full Range, YUV subsampling choice (4:2:0 / 4:2:2 / 4:4:4)
   * H264 YouTube profile in .MP4 will render AAC audio now, please use .MOV that will generate WAVE audio so that Youtube has the best quality to re-encode after upload ;) 
   * PPro / AME : new audio layout to render all individual mono tracks separately, reimportable in Premiere Pro ! "All Channels" layout are now called : "All : One Multi-Channel Track", "All : Individuals Mono Tracks" and "All : Individuals Stereo Tracks" for more clarity
   * AE : alpha channel interpretation (Straight or Premultiplied) and Matte color are now saved into files and work when reimporting into Adobe softwares
   * New "Open target directory at the end of each render" checkbox in Settings tab (it won't open the folder multiple times if rendering multiple times in the same folder, it will only bring the Explorer / Finder window on the foreground)
   * Hap codecs glitch bug fix
   * Memory optimization for very long renders

## 1.5.0  -  October 20 2018
   * Updated for CC 2019
   * Our ffmpeg fork executable is now called ffkroma, don't forget to update if not using the Windows installer ! AfterCodecs needs at least version 4.0.2-93
   * HAP codecs improvements :
      - New Hap Q Alpha profile ! Automatically selected when rendering "Hap Q / Hap Q Alpha" and exporting an alpha channel ("RGB + Alpha" in AE, checkbox in PPro / AME)
      - Best quality : new HAP algorithms are equivalent in quality to original Vidvox / Quicktime algorithms
      - Faster compression : those algorithms were optimised with fast processor instructions, including AVX512 for recent workstations, and multithreading (up to 3 times faster depending on your content and configuration)
      - For Hap and Hap Alpha you have the choice between 3 methods of compression, each with their own tradeoff between speed and quality
      - Multiple By 4 Resolutions in HAP limit removed, you can now render any resolution you want
   * Warning on OSX : Adobe changed their way of interpreting AfterCodecs ProRes 422, it has now a color shift on reimport in Adobe CC 2019 (only), please use ProRes 4444
   * Unable to Undo (CTRL+Z) when using automatic AE RQ Comments bug fix, now this feature has its own sub menu in "Composition" top menu under "AfterCodecs Settings"


 ---------------------------------------

## 1.4.2 -  September 21 2018
   * AE : new option in Settings will automatically replace all Comments section of render queue items that are AfterCodecs renders by their respective AfterCodecs  params (will happen each time you click the "Composition" top menu)
   * ProRes 422 not limited to even width anymore
   * Float licensing enabled
   * Bugs fixes

## 1.4.1 -  August 31 2018
   * Audio PPro / AME : added 24 bit , 32 bit (Float) and "All Channels (Grouped as Stereo)" audio layout which reimports fine in Premiere Pro as multichannel stereo ! (Experimental) 
   * Audio on AE : added 32 bit (Float) and 8 bit
   * [Experimental] Interlaced ProRes / H264 / H265.
      In PPro / AME you should untick the last checkbox and choose something else than "None (Progressive)" (only if you have an interlaced source !).
      In AE it's in the Render Settings -> Field
   * Checkbox in settings to disable timecode metadata
   * Description text now on the right 
   * AE : new menu Composition -> AfterCodecs Settings to change Settings without going into the render queue
   * AE in Render Mode : not showing the License popup anymore
   * AE : ProRes 422 Ultra enabled (was only for PPro / AME before)
   * H264 Fast Decode Tuning available
   * Timecode issue in PPro / AME fixed
   * Various bugs fixes

## 1.4.0  -  June 20 2018
   * Now using ffmpeg 4.0 at least and a new ffmpeg_aftercodecs, please update ffmpeg in the Settings tab
   * ProRes 422 faster in After Effects, better ProRes 422 compatibility in Adobe softwares
   * Low screen resolution bug fix
   * Unable to go over 4096x4096 resolution on PPro / AME bug fix
   * Various bug fixes

 ---------------------------------------

## 1.3.6  -  May 22 2018
   * Sound on PPro / AME : "All Channels" option available now

## 1.3.5  -  May 18 2018
   * PPro / AME : able to export 4.0 VR and 5.1 audio
   * H264 / H265 : max bitrate is now 900 Mbps and minimal filesize 1 Mio
   * Various bug fixes
   
## 1.3.4  -  April 26 2018
   * After Effects : ProRes interlaced (experimental feature)
   * Bug fix for ProRes 422 on PP/ME CC 2018 Windows 

## 1.3.3  -  April 17 2018
   * Windows : Multiple output in parallel are now possible on AME and AE
   * Manual ffmpeg download button in the Settings tab
   * OSX Crash bug fix
   * End frames lost bug fix

## 1.3.2  -  April 15 2018
   * ProRes 4444 Export in PP / AME on OSX bug fix

## 1.3.1  -  April 12 2018
   * Media Encoder render from After Effects / Interlaced footage instead of progressive bug fix
   * New Audio codec choice : Auto (= previous behavior), AAC or WAVE, useful for AE RenderGarden without audio glitches

## 1.3.0  -  April 9 2018
   * New AfterCodecs plugin for Premiere Pro and Media Encoder !
   * ProRes 4444 has been divided into 3 profiles : 4444 Light (unofficial profile lighter than 4444), 4444 and 4444 XQ
   * New "ProRes 422 Ultra" unofficial profile for Premiere Pro / Media Encoder, quality better than HQ
   * New H264 YouTube Upload profile, which provides a fast way to render a video for uploading to web platforms !
   * AE : Project Link feature is now compatible with CC 2018, and now points to the right composition in the opened project
   * Various bug fixes
   * New errors dialogs (for example with HAP codec, width must be a multiple of 4)
   * AE : If you try to render Alpha with ProRes 422, it won't switch automatically to ProRes 4444 now

 ---------------------------------------

## 1.2.2  -  Dec 11, 2017

* FREE H.264 720p in Trial !
* Snappy compression is enabled by default for HAP (the checkbox is here to disable it now)
Beware test your software and hardware before deciding to disable Snappy. Some users report choppy playback without it !
* New Setup executable for both Windows and Mac, AfterCodecs uses Autokroma folder now for configuration and storing the ffmpeg executable (not Dornisoft)
* The codecs lists indicates [A] for codecs accepting alpha channel
* Various bug fixes

## 1.2.1  -  Oct 25, 2017

* High DPI UI fix on Windows
* AfterCodecs .mov exports the timecode in non drop frame mode if the timecode is not negative
( There's an AE settings to set automatically the Drop Frame / Non Drop Frame mode when importing NTSC footage, timecode will be converted automatically !)
* XMP Project Link : New experimental feature for ProRes (enable it in the Settings tab)
* AfterCodecs downloads ffmpeg latest version 3.4
* Crash bug fixed on Chinese Windows
* A bug where trial was not enabled is fixed

## 1.2.0  -  Sep 17, 2017

### NEW FEATURES :

* Now macOS OS X compatible!
* Two new plugins in the dropdown : "AfterCodecs .mp4" and "AfterCodecs .mov". There's no more .ext and file renaming stuff (Removed the "Overwriting" options in Settings because not needed anymore)
* You can choose ProRes 4444 Alpha depth now : 16 bits or 8 bits (smaller files, faster decompression)
* Enabled lossless for x265 (same as x264 : 99 for 422, 100 for 444)
* AfterCodecs will warn you if the width or the height are odd instead of displaying the generic error popup
* 2 New shortcuts : ESC to exit AfterCodecs dialog, Shift+ESC to reposition it in the top left corner (use theses shortcuts if you have trouble with multiple screens for example)
* ProRes 422 Bitrate matches more closely official Apple ProRes bitrate than before, and are now re importable back into AE on OSX

### BUGS FIXED :

* Slight color shifts in ProRes has been mostly corrected

### WARNING :

* Items in previous projects that uses AfterCodecs won't be compatible with the new version, you'll have to reconfigure them !
* Windows : ProRes 4444 8 bits Alpha cannot be re imported in AE 16 bpc projects
* OSX : ProRes 422 when re imported in AE CC 2014 and older have color shifts ! Everything is fine for CC 2015 and CC 2017

   
 ---------------------------------------
       

## 1.1.4  -  July 1st 2017

### WARNING : 

   * ProRes renders need at least ffmpeg version N-86691-gc885356 because a bug was recently fixed in it !
      Just click the download button to update it

### BUGS FIXED : 

   * Fixed AE exit crash bug
   * Fixed the AE crash bug when clicking twice on the "Format Options" button
   * Fixed the bug in CC 2015 when trying to mux at the end of the render
   * "Error #11 : license too old" bug removed
   * Bug with 29.97 fps fixed

### NEW FEATURES : 

   * For x264 : added two lossless modes (100 for 4:4:4, 99 for 4:2:0), beware : they are not compatible with Quicktime Player and old devices
   * Overall ProRes quality has been improved, notably 4444
   * ProRes 422 renders are faster
   * End audio-video muxing is faster for x264 / x265 !
   * 16 bpc (Trillions of Colors) renders are also faster !
   * Sound for HAP codecs is now Uncompressed PCM like ProRes
   * ProRes streaming option enabled (Youtube accepts uploading ProRes !)
   * Now if you want to use a ffmpeg whose version is not supported, AfterCodecs will accept it anyway for rendering and not look for an other ffmpeg version on the computer
         
## 1.1.3  -  May 31 2017
   * Added a bitrate mode for x264 / x264 RGB / x265
   * Always overwrite checkbox in Settings to remove the dialog about renaming file OR overwriting OR canceling the render
   * Added x264 video profiles (high, main, baseline) for old devices compatibility
   * Automatically ticks FFmpeg checkbox if needed after Download
   * New buttons in Settings to open Dornisoft folder and ffmpeg folder
   * Removed max dimensions limitations, ProRes can handdle 8K resolutions now !
   * Added Hap, Hap alpha and Hap Q codecs ! With settings to enable compression and chunks
         
## 1.1.2  -  May 15 2017
   * Crash bug fix
   * ProRes bugs fixes
   * Added a "AfterCodecs AV Muxing" Dialog at the end of the render
   * Added encoder metadata to ProRes with AfterCodecs' and ffmpeg' version (for example "ProRes HQ (AFC 1.1.2 3.2.2)")
      This info can be seen in AE and PP
   * Added fast decode for x264 / x265 when resolution > HD
   * In the preview text under "Format Options" little description of chosen encoding parameters (for example "x264 Q75 (Streaming)")
   * The encoding window is not always on top anymore
   * Prevents overwriting files with the same name before launching render, asking to rename the file OR overwriting OR cancel the render
         
## 1.1.1  -  May 8 2017
   * Added a trial of 500 frames
 
## 1.1.0  -  May 8 201
   * First public version
