import { useEffect, useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/styleSheet';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { svgImages } from '../../assets/SvgImages';

export const Header = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {title !== 'Home' && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerBackButton}
        >
          <SvgXml xml={svgImages.backIcon} width={30} height={30} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>
        {title === 'Home' ? 'Music List' : 'Track Details'}
      </Text>
    </View>
  );
};
