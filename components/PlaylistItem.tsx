"use client";

import Image from "next/image";

import * as playlistImage from '@/public/images/playlist.jpeg';
import { Song } from "@/types";

import PlayButton from "./PlayButton";

interface PlaylistItemProps {
  data: any;
  image: string;
  onClick: (id: string) => void;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({
  data,
  image,
  onClick
}) => {

  return ( 
    <div
      onClick={() => onClick(data.id)} 
      className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
      "
    >
      <div 
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <Image
          className="object-cover"
          src={image? image : playlistImage}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">
          {data.title}
        </p>
        {(data.artist) &&
          <p 
            className="
              text-neutral-400 
              text-sm 
              pb-4 
              w-full 
              truncate
            "
          >
            By {data.artist}
          </p>
        }
      </div>
      {/* <div 
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton />
      </div> */}
    </div>
   );
}
 
export default PlaylistItem;
