# Music List App

A React Native mobile application that fetches and displays music tracks from the Jamendo API with download functionality, navigation, and optimized performance.

## Features

- 🎵 Browse music tracks from Jamendo API
- 📥 Download tracks to device storage (Android: Downloads folder, iOS: Documents folder)
- 🔄 Stack navigation with custom header
- 📱 Optimized FlatList rendering with throttling
- 🎨 Clean UI with centralized styling
- 📊 Download progress indicator (Android)
- 🔒 Type-safe with TypeScript

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **React Native development environment** - Follow the [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment) guide
- **For iOS development:**
  - macOS
  - Xcode (latest version)
  - CocoaPods
  - Ruby (v3.0 or higher)
- **For Android development:**
  - Android Studio
  - Android SDK
  - Java Development Kit (JDK)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Prabakaran-Sekar-7721/Music_List_App.git
cd Music_List_App
```

### 2. Install dependencies

```bash
npm install
# OR
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory (if not already present):

```env
API_URL=https://api.jamendo.com/v3.0/
CLIENT_ID=c09768cf
```

### 4. iOS Setup (macOS only)

Install Ruby dependencies:

```bash
bundle install
```

Install CocoaPods dependencies:

```bash
cd ios
bundle exec pod install
cd ..
```

## Running the App

### Start Metro Bundler

First, start the Metro JavaScript bundler:

```bash
npm start
# OR
yarn start
```

### Run on Android

In a new terminal window:

```bash
npm run android
# OR
yarn android
```

**Requirements:**
- Android emulator running OR Android device connected via USB with USB debugging enabled
- Make sure the emulator/device API level is 21 or higher

### Run on iOS (macOS only)

In a new terminal window:

```bash
npm run ios
# OR
yarn ios
```

**Requirements:**
- iOS Simulator installed via Xcode OR physical iOS device connected
- iOS version 13.0 or higher

## Troubleshooting

### Android Issues

**Problem: "SDK location not found"**
- Create `local.properties` file in `android/` folder
- Add: `sdk.dir=/path/to/Android/sdk`

**Problem: Download not working**
- Ensure storage permissions are granted in device settings
- For Android 11+, check that app has "All files access" permission

**Problem: Build fails**
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### iOS Issues

**Problem: "Pod install failed"**
```bash
cd ios
bundle exec pod deintegrate
bundle exec pod install
cd ..
```

**Problem: "Command PhaseScriptExecution failed"**
```bash
cd ios
rm -rf Pods Podfile.lock
bundle exec pod install
cd ..
```

**Problem: Downloaded files not visible**
- Files are saved in app's Documents/Music folder
- Access via iOS Files app under "On My iPhone/iPad" → Music List App

### General Issues

**Problem: Metro bundler cache issues**
```bash
npm start -- --reset-cache
# OR
yarn start --reset-cache
```

**Problem: "Unable to resolve module"**
```bash
rm -rf node_modules
npm install
# OR
yarn install
```

**Problem: TypeScript errors**
```bash
npm run tsc
# Check for any type errors
```

## Project Structure

```
music_list_app/
├── components/
│   ├── Interface/         # TypeScript interfaces
│   ├── assets/           # SVG icons and images
│   ├── common/           # Utility functions
│   ├── core/
│   │   ├── data/        # API calls
│   │   └── ui/          # UI components
│   └── styles/          # Centralized styles
├── navigation/          # Navigation setup
├── android/            # Android native code
├── ios/               # iOS native code
└── .env              # Environment variables
```

## Key Technologies

- **React Native**: 0.82.1
- **TypeScript**: 5.8.3
- **React Navigation**: Native Stack Navigator
- **axios**: HTTP client for API requests
- **react-native-fs**: File system access
- **react-native-config**: Environment configuration
- **react-native-svg**: SVG rendering

## API Integration

This app uses the [Jamendo API](https://api.jamendo.com/) to fetch music tracks. The API provides:
- Track information (name, artist, album)
- Album artwork
- Audio streaming URLs
- Download links

## Development

### Running Tests

```bash
npm test
# OR
yarn test
```

### Linting

```bash
npm run lint
# OR
yarn lint
```

### Type Checking

```bash
npx tsc --noEmit
```

## Building for Production

### Android

```bash
cd android
./gradlew assembleRelease
```

The APK will be generated at: `android/app/build/outputs/apk/release/app-release.apk`

### iOS

1. Open `ios/music_list_app.xcworkspace` in Xcode
2. Select "Product" → "Archive"
3. Follow the distribution wizard

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.

## Author

Prabakaran Sekar
- GitHub: [@Prabakaran-Sekar-7721](https://github.com/Prabakaran-Sekar-7721)
