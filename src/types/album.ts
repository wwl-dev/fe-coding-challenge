export interface Album {
  id: number;
  name: string;
  cover_url: string;
  display_key: string;
  artist: string;
  label: string;
  title: string;
  sub_title: null | string;
  cover_color: null | string;
  bpm: number;
  key: string;
  release_date: string;
  bpm_api_version: number;
  artist_script_ran: boolean;
  bpm_stream_id: null;
  created_at: string;
  updated_at: string;
  media: Media[];
  artist_remixer: Artist | null;
  artists: Artist[];
  genre: Category;
  category: Category;
  badge?: string;
}

export interface Artist {
  id: number;
  sequence_number: number;
  name: string;
  banner_url: null | string;
  artwork_url: null | string;
  slug: string;
  description: null;
  artwork_credit: null | string;
  social_media: null;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  order: number;
  icon_svg?: string;
  created_at: string;
  updated_at: string;
  color?: string;
}

export interface Media {
  id: number;
  stream_info: StreamInfo;
  waves: Waves;
  in_crate: boolean;
  download_count: number;
  name: string;
  media_lq_path: string;
  wave_path: string;
  explicit: boolean;
  size: string;
  estimated_duration: string;
  bpm_api_version: number;
  created_at: string;
  updated_at: string;
  album_id: number;
  version_id: number;
  version: Version;
}

export interface StreamInfo {
  audioInfo: AudioInfo;
}

export interface AudioInfo {
  is_preview: boolean;
  type: string;
  hq: AudioMedia;
  lq: AudioMedia;
}

export interface AudioMedia {
  hls: string;
}

export interface Version {
  id: number;
  name: string;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Waves {
  gray: string;
  colored: string;
}
