# Sheet Music Clef Converter — Project Context 

## Overview

This project is a full-stack web application that allows users to upload sheet music and convert it between clefs (primarily treble ↔ bass).

The system now includes Optical Music Recognition (OMR) to extract structured musical data from uploaded files.

---

## Core Goals

The application should:

* Accept uploaded sheet music (images or PDFs)
* Extract musical structure (notes, clef, rhythm)
* Convert music between clefs (with potentially an in-app editor to correct for errors)
* Output downloadable sheet music (PDF preferred)
* Optionally expose intermediate formats (MusicXML)

---

## Current Architecture

### Frontend

* Framework: Next.js (App Router)
* Language: TypeScript
* Styling: Tailwind CSS
* Features:

  * File upload (images + PDFs)
  * Image preview
  * Convert button with loading state

---

### Backend

* Next.js API route: `POST /api/convert`

### Current Pipeline

Browser  
→ Upload file  
→ API receives file  
→ File saved to `/uploads/`  
→ Audiveris CLI runs (OMR)  
→ Outputs `.mxl` (MusicXML)  
→ Response returned  

---

## Completed Functionality

* Full-stack file upload system
* Backend file storage
* Audiveris OMR integration
* Automatic processing of uploaded files
* MusicXML (.mxl) generation from PDFs/images
* Verified compatibility with MuseScore

---

## Current Output

* `.mxl` (MusicXML, compressed) ✅
* `.omr` (Audiveris internal file)
* log/debug files

---

## Current Limitations

* OMR output is imperfect (expected)
* No frontend download mechanism yet
* No clef conversion logic yet
* No PDF rendering of converted music
* Screenshot inputs not yet optimized

---

## Current Task

Improve user experience and begin transformation pipeline.

---

## What is Needed Next

### Immediate Next Steps

1. Add download support for `.mxl` file
2. Serve generated files via API (not local file paths)
3. Allow frontend to trigger file download

---

### Next Phase (Core Feature)

4. Parse MusicXML
5. Implement clef conversion logic
6. Generate transformed MusicXML
7. Render/export to PDF

---

### Future Enhancements

* Image preprocessing for screenshots
* AI-assisted correction of OMR errors
* In-browser sheet music preview/editor
* Support for MIDI export

---

## Key Technical Challenges

* OMR accuracy (inherent limitation)
* Parsing and transforming MusicXML
* Rendering sheet music back to PDF
* Handling low-quality image inputs

---

## Dev Log

### Day 1–2:
* Project setup
* Upload + preview UI
* Backend API for file upload
* Local file storage

### Day 3:
* Integrated Audiveris OMR
* Successfully processed PDFs into MusicXML
* Verified output in MuseScore
* Established full processing pipeline

---

## Summary

The project now has a working OMR pipeline that converts uploaded sheet music into structured MusicXML. The next phase focuses on delivering usable output (downloads), implementing clef conversion, and improving accuracy and usability.