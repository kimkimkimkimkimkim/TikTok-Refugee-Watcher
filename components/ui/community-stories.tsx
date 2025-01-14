'use client';

import { Card } from "@/components/ui/card";

interface Story {
  title: string;
  content: string;
  quote?: string;
  author?: string;
  sources: Array<{
    id: string;
    url: string;
  }>;
  stats?: {
    value: string;
    label: string;
  };
}

const stories: Story[] = [
  {
    title: "User Experiences and Expressions",
    content: "Many American users have taken to Xiaohongshu to express their feelings about the potential ban on TikTok.",
    quote: "Our government is out of their minds if they think we're going to stand for this TikTok ban. We're just going to a new Chinese app, and here we are",
    author: "Heather Roberts",
    sources: [
      { id: "1", url: "https://tribune.com.pk/story/2522072/im-a-tiktok-refugee-memes-flood-internet-as-us-users-flock-to-chinese-app-rednote-ahead-of-ban" }
    ]
  },
  {
    title: "Cultural Exchange",
    content: "The migration has fostered an unexpected cultural exchange between American and Chinese users.",
    quote: "I just want to reassure you that we want to try to find a way to communicate with you, be respectful to your community",
    sources: [
      { id: "1", url: "https://tribune.com.pk/story/2522072/im-a-tiktok-refugee-memes-flood-internet-as-us-users-flock-to-chinese-app-rednote-ahead-of-ban" }
    ]
  },
  {
    title: "Welcoming Responses",
    content: "Many Chinese users have warmly welcomed the TikTok refugees. Comments such as \"Welcome, friends\" and offers to help navigate the app have been common. One user humorously suggested that newcomers could learn Mandarin instead of using translation apps, emphasizing a spirit of camaraderie.",
    sources: [
      { id: "4", url: "https://timesofindia.indiatimes.com/world/us/red-note-the-chinese-instagram-app-attracting-tiktok-refugees/articleshow/117237230.cms" }
    ]
  },
  {
    title: "Memes and Humor",
    content: "The situation has inspired a wave of memes and humor on social media, with users playfully dubbing themselves \"TikTok refugees.\" One meme pointed out the irony of fleeing from TikTok due to data privacy concerns only to join another Chinese platform.",
    sources: [
      { id: "5", url: "https://abc7ny.com/post/what-is-rednote-xiaohongshu-chinese-social-media-app-americans-are-flocking-scotus-ponders-ban-tiktok-us/15798485/" }
    ]
  },
  {
    title: "Community Building through Hashtags",
    content: "The hashtag #TikTokRefugee has gained traction on Xiaohongshu. Users are sharing their migration stories and life content under this tag, creating a sense of community among those transitioning from TikTok.",
    stats: {
      value: "60M+",
      label: "Views on #TikTokRefugee"
    },
    sources: [
      { id: "2", url: "https://www.yahoo.com/news/us-tiktok-refugees-discover-chinas-093000589.html" },
      { id: "3", url: "https://www.chaincatcher.com/en/article/2162408" }
    ]
  },
  {
    title: "Influencer Engagement",
    content: "Influencers like Nuha have also joined Xiaohongshu, sharing their apprehensions and excitement about the transition.",
    quote: "I am so nervous to be on this app but I also find it to be really exciting",
    author: "Nuha",
    sources: [
      { id: "4", url: "https://timesofindia.indiatimes.com/world/us/red-note-the-chinese-instagram-app-attracting-tiktok-refugees/articleshow/117237230.cms" }
    ]
  }
];

export function CommunityStories() {
  return (
    <div className="space-y-8">
      <Card className="p-6 bg-gradient-to-br from-pink-50 to-purple-50">
        <h3 className="text-2xl font-bold mb-6">Community Voices & Experiences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <blockquote className="mb-4">
                <p className="text-lg italic text-[#111111]">&ldquo;{story.content}&rdquo;</p>
              </blockquote>
              {/* Title */}
              <h4 className="text-lg font-semibold text-purple-900">{story.title}</h4>

              {/* Quote */}
              {story.quote && (
                <blockquote className="border-l-4 border-purple-200 pl-4 italic text-gray-600">
                  "{story.quote}"
                  {story.author && (
                    <footer className="text-sm text-gray-500 mt-2">
                      — {story.author}
                    </footer>
                  )}
                </blockquote>
              )}

              {/* Stats */}
              {story.stats && (
                <div className="bg-purple-50 rounded-lg p-4 flex items-center space-x-3">
                  <div className="text-2xl font-bold text-purple-600">{story.stats.value}</div>
                  <div className="text-sm text-purple-700">{story.stats.label}</div>
                </div>
              )}

              {/* Sources */}
              <div className="flex flex-wrap gap-2 pt-2">
                {story.sources.map((source, sIndex) => (
                  <a
                    key={sIndex}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-purple-600 hover:text-purple-800"
                  >
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    [Source {source.id}]
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
