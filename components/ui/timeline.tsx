'use client';

import { Card } from "@/components/ui/card";
import { format, parseISO } from 'date-fns';

interface TimelineItem {
  date: string;
  content: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "2025-01-14",
    content: "The term \"TikTok refugees\" became widely recognized as thousands of users migrated to Xiaohongshu (also known as RedNote) amid fears of a TikTok ban in the U.S. This migration propelled Xiaohongshu to become the most downloaded app on the U.S. App Store. Users began sharing their experiences and introducing themselves as refugees from TikTok, creating a vibrant exchange between American and Chinese users."
  },
  {
    date: "2025-01-13",
    content: "Reports indicated that Xiaohongshu had surged to the top of the App Store downloads due to the influx of American users. Many newcomers were actively engaging with Chinese netizens, sharing humorous content about their transition and expressing their motivations for leaving TikTok as a form of protest against U.S. government actions."
  },
  {
    date: "2025-01-12",
    content: "As discussions around a potential TikTok ban intensified, users began flocking to Xiaohongshu. The platform was filled with posts from international users, many of whom were surprised by the sudden cultural exchange. This day marked the beginning of significant content creation by TikTok refugees on Xiaohongshu, reflecting their desire to maintain social connections."
  },
  {
    date: "2025-01-11",
    content: "The U.S. Supreme Court held oral arguments regarding TikTok's future, leading to heightened anxiety among users about the app's potential shutdown due to national security concerns. This legal uncertainty prompted many to seek alternatives like Xiaohongshu."
  },
  {
    date: "2022-04-01",
    content: "U.S. lawmakers passed legislation that required TikTok's parent company, ByteDance, to find a U.S.-approved buyer or face a shutdown due to national security implications. This legislative action set the stage for future concerns and discussions about TikTok's viability in the United States."
  }
];

export function Timeline() {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {timelineData.map((item, index) => (
        <div key={index} className="relative flex items-start">
          {/* Bullet point */}
          <div className="absolute left-0 flex h-10 w-10 items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-blue-500 ring-4 ring-white"></div>
          </div>
          
          {/* Content */}
          <Card className="ml-12 w-full hover:shadow-lg transition-shadow">
            <div className="flex flex-col space-y-3 p-6">
              <time className="text-sm font-semibold text-blue-600">
                {format(parseISO(item.date), 'MMMM d, yyyy')}
              </time>
              <p className="text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
