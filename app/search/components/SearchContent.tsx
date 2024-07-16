"use client";

import { Song } from "@/types";
import { useSearch, SearchType, Platform } from "@/hooks/useSearch";

import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from "next/navigation";
import usePlayer from "@/hooks/usePlayer";
import { usePlayerStore, useSearchStore, useKeyStore } from "@/app/store";

interface SearchContentProps {
  songs: Song[];
} 

const SearchContent: React.FC<SearchContentProps> = ({
  songs
}) => {
  const router = useRouter();
  const { 
    searchType, 
    setSearchType,
    searchTerm,
    setYtSearch,
    ytSearch,
    setSearchTerm,
    topResults, 
    songResults,
    playlistResults,
    artistResults,  
    albumResults,
    searchResults,
    isLoading,
    getNextPage,
    searchPage,
    platform,
    setPlatform, 
  } = useSearch();

  const { scKey } = useKeyStore();
  const { scResults, setScResults, spotResults, ytResults, setYtResults } = useSearchStore();
  const { currentTrack, setCurrentTrack } = usePlayerStore();
  // setYtSearcher(youtube);
  const searchCategories: SearchType[] = [SearchType.Top, SearchType.Songs, SearchType.Playlists, SearchType.Artists, SearchType.Albums]
  const ytCategories: SearchType[] = [SearchType.Top, SearchType.Songs, SearchType.Playlists, SearchType.Artists]
  const categories = platform === Platform.Youtube ? ytCategories : searchCategories;
  const activeColor = platform === Platform.Youtube ? 'bg-red-600 text-white' : platform === Platform.Spotify ? 'bg-green-600 text-white'  : 'bg-orange-600 text-white';

  const { user } = useUser();
  const supabaseClient = useSupabaseClient();

  const player = usePlayer();
  
  const getActiveCategory = () => {
    if (platform !== Platform.Youtube) {
      return searchType;
    } else {
      return searchType !== SearchType.Albums ? searchType : SearchType.Top;
    }
  }

  return ( 
    <div className="flex flex-col gap-y-2 w-full px-6">
      {/* display buttons for searching Top, Songs, Playlists, Artists */}
      <div className="flex flex-row gap-x-2">
        {categories.map((category: SearchType) => (
          <button 
            key={category} 
            className={`
              ${category === getActiveCategory()
                ? activeColor 
                : 'bg-neutral-700 text-neutral-300'
              } 
              px-4 py-2 rounded-lg 
              focus:outline-none 
              focus:ring-2 
              focus:ring-neutral-500 
              focus:ring-offset-2 
              focus:ring-offset-neutral-900
            `}
            onClick={() => setSearchType(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
 
export default SearchContent;