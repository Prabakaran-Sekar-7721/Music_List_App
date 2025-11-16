# Music List App - User Instructions

## Overview

This Music List App allows you to browse and download music tracks from the Jamendo music library. The app features a clean interface with easy navigation and download capabilities.

## Getting Started

When you first launch the app, you'll see the **Music List** screen displaying available tracks from Jamendo.

## Main Features

### 1. Browse Music Tracks

**Home Screen (Music List)**
- The main screen displays a scrollable list of music tracks
- Each track shows:
  - Album artwork (thumbnail image)
  - Track name
  - Artist name
  - Download icon button

**How to Navigate:**
- Scroll up or down to view more tracks
- The list automatically loads tracks from the Jamendo API

### 2. View Track Details

**Accessing Track Details:**
1. Tap on any track item in the list
2. You'll be taken to the **Track Details** screen

**Track Details Screen Shows:**
- Large album artwork
- Full track name (if it was truncated on the main screen)
- Artist Name
- Album Name
- Track Duration (displayed in minutes:seconds format)
- Release Date
- Download button

**Navigation:**
- Tap the **back arrow (←)** in the header to return to the Music List

### 3. Download Music

**Downloading from Main Screen:**
1. Find the track you want to download
2. Tap the **download icon** (📥) on the right side of the track
3. A download progress indicator will appear

**Downloading from Track Details:**
1. Navigate to the track details screen
2. Tap the green **"Download"** button at the bottom
3. A download progress indicator will appear

**Download Progress:**
- A loading modal will appear showing "Downloading..."
- On Android devices, you'll also see the download percentage
- Wait for the download to complete

**Where Are Downloaded Files Saved?**

**Android:**
- Files are saved to: `Device Storage/Download/`
- Access via your device's File Manager or Downloads app
- Files are named with the track name

**iOS:**
- Files are saved to: `Documents/Music/` folder within the app
- Access via the iOS **Files** app
- Navigate to: "On My iPhone/iPad" → "Music List App"

### 4. Managing Downloads

**Check Download Status:**
- The app will show an alert when download completes successfully
- If download fails, you'll see an error message

**Storage Permissions:**
- **Android:** The app will request storage permissions on first download
- **iOS:** Files are automatically saved to the app's document folder

## Tips for Best Experience

### Performance
- The app loads tracks in batches for smooth scrolling
- Tracks are rendered efficiently to prevent lag
- Scroll smoothly without waiting for all tracks to load

### Downloads
- Make sure you have a stable internet connection
- Ensure you have sufficient storage space on your device
- One download at a time is recommended for best performance

### Navigation
- Use the back button in the header to return to the previous screen
- The header shows the current screen name ("Music List" or "Track Details")

## Understanding the Interface

### Header
- **Green background** with white text
- Shows current screen name
- **Back button (←)** appears on detail screens

### Track Cards
- **Album art** on the left (circular thumbnail)
- **Track info** in the middle:
  - Top line: Track name
  - Bottom line: Artist name
- **Download button** on the right

### Track Details Layout
- **Top section:** Large album artwork and track name
- **Middle section:** Detailed information in labeled fields
- **Bottom section:** Download button (green, full width)

### Loading Indicator
- Green rounded box appears during downloads
- Shows "Downloading..." text
- On Android: Shows percentage progress

## Troubleshooting

**Track List Not Loading:**
- Check your internet connection
- Pull down to refresh (if implemented)
- Restart the app

**Download Not Working:**
- Ensure storage permissions are granted
- Check available storage space
- Verify internet connection is stable

**App Crashes:**
- Make sure you have the latest version
- Clear app cache (in device settings)
- Reinstall if problems persist

**Can't Find Downloaded Files:**
- **Android:** Check the Downloads folder using File Manager
- **iOS:** Open Files app and look under "On My iPhone/iPad"

## Privacy & Data

- The app fetches music data from Jamendo API
- No personal data is collected or stored
- Downloaded files are stored locally on your device only
- Internet connection is required to browse and download tracks

## Support

For technical issues or questions:
- Check the main README.md for setup and installation help
- Report bugs on the GitHub repository
- Contact the developer through GitHub

---

**Enjoy discovering and downloading great music! 🎵**
