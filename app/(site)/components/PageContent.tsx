"use client"

import { Song } from "@/types";

import { useKeyStore, useProfileStore } from '@/app/store';

import { useSessionContext } from "@supabase/auth-helpers-react";

import { useRouter } from "next/navigation";

interface PageContentProps {
  songs?: Song[];
}

const PageContent: React.FC<PageContentProps> = ({
  songs, 
  // key
}) => {
  const router = useRouter();
  const {
    supabaseClient
  } = useSessionContext();
  const { scKey, setScKey } = useKeyStore();

  

  const { spotPlaylists, scPlaylists, ytPlaylists } = useProfileStore();

  return (
    <>
      {/* {channelData && 
        <ChannelContent contents={channelData?.current_tab.content.contents.filter(
          (shelf: any) => shelf.contents[0].type === "Shelf" || shelf.contents[0].type === "ChannelVideoPlayer")} />
      } */}
    </>
  );
}
 
export default PageContent;