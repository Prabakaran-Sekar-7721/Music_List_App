import React from 'react';
import { Modal, View, ActivityIndicator,Text, Platform } from 'react-native';
import { styles } from '../../styles/styleSheet';
import { colors } from '../../styles/colors';

interface LoadingIndicatorProps {
  visible: boolean;
  percentage?: number;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ visible,percentage }) => {
  return (
    <Modal animationType="none" transparent={true} visible={visible}>
      <View style={styles.modalContainer} />
      <View style={styles.loadingIndicatorContainer}>
        <Text style={styles.textWhiteSmall}>{'Downloading...'}</Text>
        <ActivityIndicator size='large' color="white" />
        {Platform.OS === 'android' ? (
          <Text style={styles.textWhiteSmall}>{percentage ? `${percentage}%` : ''}</Text>
        ) : (
          <View style={styles.loadingPercentageSpacing}></View>
        )}
      </View>
    </Modal>
  );
};
