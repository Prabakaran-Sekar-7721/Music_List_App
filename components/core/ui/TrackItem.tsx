import { styles } from '../../styles/styleSheet';
import { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Track } from '../../Interface/Track';
import { SvgXml } from 'react-native-svg';
import { svgImages } from '../../assets/SvgImages';
import { downloadFunction } from '../../common/UtilityFunctions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

interface TrackItemProps {
  item: Track;
  setIsDownloading: React.Dispatch<React.SetStateAction<boolean>>;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

export const TrackItem: React.FC<TrackItemProps> = ({
  item,
  setIsDownloading,
  setPercentage,
  navigation,
}) => {
  const handleDownload = useCallback(
    (e: any) => {
      e.stopPropagation();
      downloadFunction(item.audiodownload, setIsDownloading, setPercentage);
    },
    [item.audiodownload, setIsDownloading, setPercentage],
  );

  const handlePress = useCallback(() => {
    navigation.navigate('TrackDetails', { track: item });
  }, [item, navigation]);

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <View style={styles.card}>
        <View style={styles.trackImageContainer}>
          <Image source={{ uri: item.album_image }} style={styles.trackImage} />
        </View>
        <View style={styles.trackInfoContainer}>
          <Text style={styles.textPrimary}>{item.name}</Text>
          <Text style={styles.textSecondary}>{item.artist_name}</Text>
        </View>
        <View style={styles.trackActionContainer}>
          <TouchableOpacity onPress={handleDownload}>
            <SvgXml xml={svgImages.downloadIcon} width={24} height={24} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
