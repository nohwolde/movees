
"use client";
import { postData } from '@/libs/helpers';
import { useEffect, useState, createContext, useContext } from 'react';


type SearchContextType = {
  topResults: any[] | [];
  songResults: any[] | [];
  playlistResults: any[] | [];
  artistResults: any[] | [];
  albumResults: any[] | [];
  searchTerm: string;
  searchType: SearchType;
  setYtSearch: (searcher: any) => void;
  ytSearch: any | undefined;
  setSearchType: (searchType: SearchType) => void;
  setSearchTerm: (searchTerm: string) => void;
  searchResults: string[] | [];
  isLoading: boolean;
  getNextPage: () => void;
  searchPage: number;
  platform: Platform;
  setPlatform: (platform: Platform) => void;
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export interface Props {
  [propName: string]: any;
}

export enum Platform {
  Spotify = 'Spotify',
  Youtube = 'Youtube',
  Soundcloud = 'Soundcloud'
}

export enum SearchType {
  Top = 'Top',
  Songs = 'Songs',
  Playlists = 'Playlists',
  Artists = 'Artists', 
  Albums = 'Albums'
}

export const MySearchContextProvider = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [topResults, setTopResults] = useState<any[]>([]);
  const [searchType, setSearchType] = useState<SearchType>(SearchType.Top);
  const [songResults, setSongResults] = useState<any[]>([]);
  const [playlistResults, setPlaylistResults] = useState<any[]>([]);
  const [artistResults, setArtistResults] = useState<any[]>([]);
  const [albumResults, setAlbumResults] = useState<any[]>([]);
  const [searchPage, setSearchPage] = useState(0);
  const [platform, setPlatform] = useState<Platform>(Platform.Youtube);
  const [ytSearch, setYtSearch] = useState<(any)>();

  const site = platform === Platform.Spotify ? 'site:open.spotify.com' : platform === Platform.Youtube ? 'site:youtube.com' : 'site:soundcloud.com';
  const getSearchType: () => string = () => {
    switch(searchType) {
      case SearchType.Top:
        return site;
      case SearchType.Songs:
        return site + '/track';
      case SearchType.Playlists:
        return site + '/playlist';
      case SearchType.Artists:
        return site + '/artist';
      case SearchType.Albums:
        return site + '/album';
    }
  }

  const getGoogleSearchData = async (searchTerm: string, start: number) => {

  };

  const searchGoogle = async (searchTerm: string) => {
  };

  const setResults = (results: any[]) => {
    switch(searchType) {
      case SearchType.Top:
        setTopResults(results);
        break;
      case SearchType.Songs:
        console.log(results);
        setSongResults(results);
        break;
      case SearchType.Playlists:
        setPlaylistResults(results);
        break;
      case SearchType.Artists:
        setArtistResults(results);
        break;
      case SearchType.Albums:
        setAlbumResults(results);
        break;
    }
    setIsLoading(false);
  }

  const getArtist = async (url: string) => {
    const artist = await postData({
      url: '/api/spotify/getInfo',
      data: { url }
    });
    console.log(artist);
  }


  const getSpotifyResults = async (resultUrls: string[]) => {
    return resultUrls;
  };

  const searchSc = async(searchTerm: string) => {

  }

  
  const searchYt = async(searchTerm: string) => {

  }



  const getNextPage = async () => {

  };

  useEffect(() => {
    if (searchTerm !== '') {
      if(platform === Platform.Spotify) searchGoogle(searchTerm);
      else if(platform === Platform.Soundcloud) searchSc(searchTerm);
      else searchYt(searchTerm);
    }
  }, [searchTerm, platform, searchType]);

  const value = {
    topResults,
    songResults, 
    playlistResults,
    artistResults,
    albumResults,
    searchTerm,
    setYtSearch,
    ytSearch,
    setSearchTerm,
    searchType,
    setSearchType,
    searchResults,
    isLoading,
    getNextPage,
    searchPage, 
    platform,
    setPlatform
  };

  return (
    <SearchContext.Provider value={value} {...props} />
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchContextProvider');
  }

  return context;
}