'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";

interface VideoCardProps {
  title: string;
  url: string;
}

export function VideoCard({ title, url }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Extract video ID from YouTube URL
  const videoId = url.includes('watch?v=') 
    ? url.split('watch?v=')[1]
    : url.includes('youtu.be/') 
      ? url.split('youtu.be/')[1]
      : url.split('/')[url.split('/').length - 1];

  // Get thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div className="relative aspect-video">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <div 
            className="relative w-full h-full"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black bg-opacity-70 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2 text-[#111111] line-clamp-2 hover:text-[#fe2c55] transition-colors">
          {title}
        </h3>
      </div>
    </Card>
  );
}
