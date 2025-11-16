import { styles } from '../../styles/styleSheet';
import React, { useEffect, useState, useCallback } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Text,
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { Track } from '../../Interface/Track';
import {
  downloadFunction,
  formatDuration,
} from '../../common/UtilityFunctions';
import { TrackDetailsScreenProps } from '../../../navigation/types';
import { LoadingIndicator } from './LoadingIndicator';

export const TrackDetailsPage: React.FC<TrackDetailsScreenProps> = ({
  route,
}) => {
  const { track: passedTrack } = route.params;
  const [track, setTrack] = useState<Track>(passedTrack);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsImageContainer}>
        <Image source={{ uri: track.album_image }} style={styles.detailsImage} />
        <Text style={styles.textPrimaryLarge}>
          {track.name}
        </Text>
      </View>
      <View style={styles.detailsInfoContainer}>
        <View style={styles.detailsFieldContainer}>
          <Text style={styles.textSecondaryLabel}>
            {'Artist Name '}
          </Text>
          <Text style={styles.textSecondaryValue}>
            {track.artist_name}
          </Text>
        </View>
        <View style={styles.detailsFieldContainer}>
          <Text style={styles.textSecondaryLabel}>
            {'Album Name '}
          </Text>
          <Text style={styles.textSecondaryValue}>
            {track.album_name}
          </Text>
        </View>
        <View style={styles.detailsFieldContainer}>
          <Text style={styles.textSecondaryLabel}>
            {'Duration '}
          </Text>
          <Text style={styles.textSecondaryValue}>{`${formatDuration(track.duration)} mins`}</Text>
        </View>
        <View style={styles.detailsFieldContainer}>
          <Text style={styles.textSecondaryLabel}>
            {'Release Date '}
          </Text>
          <Text style={styles.textSecondaryValue}>
            {track.releasedate}
          </Text>
        </View>
      </View>
      <View style={styles.detailsButtonContainer}>
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={() =>
            downloadFunction(track.audiodownload, setIsDownloading, setPercentage)
          }
        >
          <Text style={styles.textWhite}>
            {'Download'}
          </Text>
        </TouchableOpacity>
      </View>
      <LoadingIndicator visible={isDownloading} percentage={percentage} />
    </ScrollView>
  );
};
