import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Track } from '../components/Interface/Track';

export type RootStackParamList = {
  Home: undefined;
  TrackDetails: { track: Track };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type TrackDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TrackDetails'
>;
