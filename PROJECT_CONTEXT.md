# Sheet Music Clef Converter — Project Context

## Overview

This project is a full-stack web application that allows users to upload images of sheet music and convert them between clefs (primarily treble ↔ bass). The long-term goal is to process sheet music images, extract musical information, transform it, and output editable sheet music formats.

---

## Core Goals

The application should:

* Accept uploaded sheet music images (full pages or cropped sections)
* Detect musical structure from the image (clef, notes, key signature, rhythm)
* Convert music between clefs (e.g., treble → bass)
* Output editable sheet music (MusicXML preferred)
* Allow export to formats such as PDF or MusicXML
* Potentially be monetized (e.g., ads or premium features)

---

## Current Architecture

### Frontend

* Framework: Next.js (App Router)
* Language: TypeScript
* Styling: Tailwind CSS
* Features implemented:

  * Image upload UI
  * Image preview
  * Convert button with loading state

### Backend

* Implemented using Next.js API routes
* Endpoint: `POST /api/convert`
* Capabilities:

  * Accepts file uploads via `FormData`
  * Converts uploaded file into a buffer
  * Saves file locally to `/frontend/uploads/`
  * Returns JSON response to frontend

### Data Flow (Current)

Browser → Next.js API route → File saved to disk → Response returned

---

## Completed Functionality

* Project repository initialized
* Next.js frontend scaffolded and running
* Clean homepage UI
* Image upload and preview working
* Convert button implemented
* Frontend connected to backend API
* Backend successfully receives uploaded files
* Files are saved locally on the server

---

## Current Task

Research and integrate an Optical Music Recognition (OMR) system.

---

## What is Needed Next

The application currently stops at saving uploaded images. The next phase is to extract musical data from these images.

### Immediate Goals

1. Select an OMR tool/library
2. Run OMR manually on saved images to understand output format
3. Integrate OMR into backend pipeline
4. Parse OMR output into a structured format (e.g., JSON or MusicXML)
5. Prepare for clef transformation logic

---

## OMR Requirements

The OMR system must be able to:

* Detect staff lines and clefs
* Identify notes and pitches
* Extract rhythm/duration
* Output structured data (preferably MusicXML)

---

## Potential OMR Tools (to evaluate)

* Audiveris (open-source, Java-based, outputs MusicXML)
* OpenOMR (older, less maintained)
* Commercial APIs (if needed later)

---

## Key Technical Challenges

* Image recognition accuracy (OMR is inherently imperfect)
* Parsing and interpreting OMR output
* Mapping musical data for clef conversion
* Rendering transformed music back into a visual format

---

## Future Architecture (Planned)

Browser
→ Upload image
→ Backend API
→ OMR processing
→ Structured music data (MusicXML/JSON)
→ Clef conversion logic
→ Render new sheet music
→ Export/download

---

## Important Notes

* The current system successfully handles file upload and storage
* OMR integration is the next critical milestone
* Clef conversion logic depends entirely on structured musical data from OMR

---

## Dev Log

Day 1:

* Repository created
* Next.js app initialized
* Development environment configured
* Homepage UI cleaned

Day 2:

* Image upload and preview implemented
* Convert button with loading state added
* Backend API route created
* File upload from frontend to backend working
* Files successfully saved to local server

---

## Summary

The project has a working full-stack foundation. The next phase is integrating an OMR system to convert uploaded sheet music images into structured musical data, which will enable clef conversion and final output generation.
