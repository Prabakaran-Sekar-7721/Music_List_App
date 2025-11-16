import { styles } from '../../styles/styleSheet';
import { useEffect, useState, useCallback } from 'react';
import { FlatList, Modal, Text, View } from 'react-native';
import getTracks from '../data/getTracks';
import { Track } from '../../Interface/Track';
import { TrackItem } from './TrackItem';
import { HomeScreenProps } from '../../../navigation/types';
import { LoadingIndicator } from './LoadingIndicator';

export const Main: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(0);
  useEffect(() => {
    const fetchdata = async () => {
      const tracks = await getTracks();
      console.log(tracks?.results);
      setTracks(tracks?.results || []);
    };
    fetchdata();
  }, []);

  // Memoize renderItem to prevent re-renders
  const renderItem = useCallback(
    ({ item }: { item: Track }) => (
      <TrackItem
        item={item}
        setIsDownloading={setIsDownloading}
        setPercentage={setPercentage}
        navigation={navigation}
      />
    ),
    [navigation, setIsDownloading,setPercentage],
  );

  // Memoize keyExtractor
  const keyExtractor = useCallback(
    (item: Track, index: number) => `${item.id}-${index}`,
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEnabled={true}
        updateCellsBatchingPeriod={50}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        onEndReachedThreshold={0.5}
        removeClippedSubviews={true}
        windowSize={10}
      />
      <LoadingIndicator visible={isDownloading} percentage={percentage}/>
    </View>
  );
};
