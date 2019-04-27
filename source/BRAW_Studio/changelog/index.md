---
title: Changelog
product: BRAW Studio
order: 2
---

# Changelog

## 1.3.0 (Current version)  -  April 8 2019
   * BRAW API 1.3 (Blackmagic Design URSA Mini Pro G2 support)
   * New BRAW Studio Panel, compatible only with PPro CC 2019 : 
        - Automatically imports BRAW metadata : Camera Name, Scene, Take etc. automatically added to imported clips. You need to change Project panel columns display to see all of them
        - "Media Start" Timecode for NTSC Framerates fixed (=> now you can export to FCP XML and reimport it into DaVinci Resolve without issues) 
   * Bug fixes :
        - Some frames were doubled and some missing
        - When audio track was shorter than video track (slow motion footage)
   * New "BRAW Studio Readme.pdf" with more details about installing BRAW Studio, licensing, settings, accessing the Source Settings and information about the new Panel
   * License and Settings :
        - New button at the top of the Source Settings to access them (more visible than the little top right icon)
        - When clicking on "Open Log Folder" it will create automatically a .zip to send us

## 1.2.1  -  March 21 2019
   * Importing BRAW files from a network location bug fixed
   * "Merge Clip" feature : merged BRAW clips source settings are working now but without sidecar save/load
   * BRAW Studio Settings popup can be launched when importing .braw into Adobe Media Encoder by right-clicking and selecting "Source Settings"
   * Logs can now be written without launching in Administrator Mode
   * Plugin more stable overall, fixed some crashes

## 1.2.0  -  March 6 2019
   * Updating BRAW SDK to 1.2 :
        - Analog gain restricts ISOs you can choose
        - BRAW Studio can now load braw files shot from Blackmagic Design Pocket Cinema Camera 4K 
        - New Gamut : ACES AP0 and ACES AP1
        - New Gamma : ACEScct
   * BRAW Studio available on Adobe Media Encoder with a dedicated license, beginning with "AUKBRME". Licensing will be done through PPro BRAW Studio Settings popup (see video tutorial)
   * UI freezes bug fix
   * Bug Fixed : When .braw with international characters in filename was loaded, the created sidecar had a wrong filename
   * You can license AfterCodecs in BRAW Studio and vice-versa

## 1.1.0  -  February 19 2019
   * BRAW Studio updated to Blackmagic BRAW API version 1.1 (from DaVinci Resolve 15.2)
      * New Color Spaces (Rec.709, Rec.2020, DCI-P3 D65, DCI-P3 Theater, CIE 1931 XYZ D65, CIE 1931 XYZ D50 PCS)
      * New Gammas (Linear, Rec.2100 Hybrid Log Gamma, Rec.2100 ST2084 PQ)
      * Hilight Recovery mode
      * White Level & Black Level sliders in Gamma Controls
      * ISO 3200 available now
      * Some footage were impossible to open : now fixed
   * Better logs files for debugging
   * Footage without audio won't display a popup error anymore

## 1.0.0  -  January 29 2019
   * First official version after January 13 BETA
   * For Premiere Pro / Windows as of now
   * Wrong colors with "Decode Using Camera Metadata" bug fix
   * Media Browser import crash bug fix