import { Alert, Platform } from 'react-native';
import RNFS from 'react-native-fs';

export const downloadFunction = async (url: string,setIsDownloading: React.Dispatch<React.SetStateAction<boolean>>,setPercentage: React.Dispatch<React.SetStateAction<number>>) => {
    try {
        console.log("Download function triggered for URL: " + url);
        setIsDownloading(true);
        
        // Extract filename from URL or use a default name
        const filename = url.split('/').pop() || `download_${Date.now()}.mp3`;
        
        // Create download directory path - platform specific
        // iOS: Use DocumentDirectoryPath and make it accessible via Files app
        // Android: Use DownloadDirectoryPath (Downloads folder)
        let downloadDir: string;
        
        if (Platform.OS === 'ios') {
            // iOS: Save to Documents folder (accessible via Files app)
            downloadDir = `${RNFS.DocumentDirectoryPath}/Music/`;
        } else {
            // Android: Use system Downloads folder
            downloadDir = `${RNFS.DownloadDirectoryPath}/`;
        }
        
        // Ensure directory exists
        const dirExists = await RNFS.exists(downloadDir);
        if (!dirExists) {
            await RNFS.mkdir(downloadDir);
        }
        
        const filepath = downloadDir + filename;
        
        console.log("Downloading to: " + filepath);
        
        // Download the file
        const result = await RNFS.downloadFile({
            fromUrl: url,
            toFile: filepath,
            progress: (res: any) => {
                const progress = res.bytesWritten / res.contentLength;
                setPercentage(parseFloat((progress * 100).toFixed(2)));
                console.log(`Download progress: ${(progress * 100).toFixed(2)}%`);
            }
        }).promise;
        
        if (result.statusCode === 200) {
            console.log("File downloaded successfully to: " + filepath);
            Alert.alert('Success', `File downloaded successfully!\nLocation: ${filepath}`);
            setIsDownloading(false);
            return filepath;
        } else {
            throw new Error(`Download failed with status code: ${result.statusCode}`);
            setIsDownloading(false);
        }
    } catch (error) {
        console.error("Download error: ", error);
        Alert.alert('Error', 'Failed to download file. Please try again.');
        setIsDownloading(false);
    }
};

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};