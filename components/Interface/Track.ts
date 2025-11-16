export interface Track {
  id: string;
  name: string;
  artist_id: string;
  artist_idstr: string;
  artist_name: string;
  album_id: string;
  album_name: string;
  album_image: string;
  image: string;
  audio: string;
  audiodownload: string;
  audiodownload_allowed: boolean;
  duration: number;
  position: number;
  releasedate: string;
  license_ccurl: string;
  prourl: string;
  shareurl: string;
  shorturl: string;
  content_id_free: boolean;
}

export interface TracksResponse {
  results: Track[];
  [key: string]: any;
}
