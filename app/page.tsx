import type { Metadata } from 'next';
import Image from "next/image";
import Navigation from "@/components/ui/navigation";
import { NewsCard } from "@/components/ui/news-card";
import { Timeline } from "@/components/ui/timeline";
import { StatementCard } from "@/components/ui/statement-card";
import { ImpactAnalysis } from "@/components/ui/impact-analysis";
import { ComingSoon } from "@/components/ui/coming-soon";
import { VideoCard } from "@/components/ui/video-card";
import { PolicyTimeline } from "@/components/ui/policy-timeline";
import { CommunityStories } from "@/components/ui/community-stories";

export const metadata: Metadata = {
  title: 'TikTok Refugee Crisis: Live Coverage & Updates',
  description: 'Stay informed about the latest developments in the TikTok platform transition. Breaking news, impact analysis, and community stories about content creators moving to new platforms.',
  keywords: 'TikTok, TikTok Ban, Social Media, Content Creators, Digital Migration, Xiaohongshu, RedNote',
  openGraph: {
    title: 'TikTok Refugee Crisis: Live Coverage & Updates',
    description: 'Comprehensive coverage of the TikTok platform transition, featuring breaking news, analysis, and community stories.',
    type: 'website',
  },
};

const breakingNews = [
  {
    title: "Leave It to TikTokers to Turn Protesting Into a Meme",
    description: "With a ban looming, creators are — what else? — turning their fury into content.",
    url: "https://www.bloomberg.com/opinion/articles/2025-01-13/tiktok-refugees-flock-to-china-s-rednote-to-protest-us-bytedance-ban",
    source: "Bloomberg",
    publishedAt: "2025-01-14T06:40:58+08:00"
  },
  {
    title: "US 'TikTok refugees' flee to Chinese app Xiaohongshu",
    description: "SAN FRANCISCO: With TikTok facing an imminent shutdown in the United States, American content creators have taken flight - to another Chinese social media app.",
    url: "https://www.channelnewsasia.com/east-asia/us-tiktok-refugees-chinese-app-xiaohongshu-rednote-4856436",
    source: "CNA",
    publishedAt: "2025-01-14T10:40:58+08:00"
  },
  {
    title: "TikTok users flock to Chinese app RedNote as US ban looms",
    description: "TikTok users in the US are migrating to a Chinese app called RedNote with the threat of a ban just days away.",
    url: "https://www.bbc.com/news/articles/c2475l7zpqyo",
    source: "BBC",
    publishedAt: "2025-01-14T14:40:58+08:00"
  },
  {
    title: "US netizens calling themselves 'TikTok refugees' migrate to Chinese social media app ahead of US Supreme Court ruling",
    description: "U.S.-based netizens are flocking to the Chinese app en masse in preparation for TikTok's closure.",
    url: "https://www.globaltimes.cn/page/202501/1326802.shtml",
    source: "Global Times",
    publishedAt: "2025-01-13T23:40:58+08:00"
  }
];

const officialStatements = [
  {
    author: "Nuha",
    role: "Influencer",
    content: "Hi guys, TikTok refugee here. I am so nervous to be on this app but I also find it to be really exciting and thrilling that we are all doing this",
    url: "https://www.scmp.com/news/china/diplomacy/article/3294639/self-styled-tiktok-refugees-find-new-chinese-app-sending-it-no-1-us?module=Diplomacy&pgtype=section"
  },
  {
    author: "Paul Tran",
    role: "Co-petitioner",
    content: "Our brand embodies the dream... something no other platform has allowed us to do",
    url: "https://www.yahoo.com/news/us-tiktok-refugees-discover-chinas-093000589.html"
  },
  {
    author: "Anonymous User",
    role: "Xiaohongshu User",
    content: "I have no idea who anyone on this app is but you all seem pretty cool",
    url: "https://www.yahoo.com/news/us-tiktok-refugees-discover-chinas-093000589.html"
  },
  {
    author: "Public Statement",
    role: "User Reaction",
    content: "I would rather stare at a language which I can't understand than to ever use a social media [platform] that Mark Zuckerberg owns",
    url: "https://www.theonlinecitizen.com/2025/01/14/us-content-creators-flee-to-xiaohongshu-amid-looming-tiktok-ban/"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#fe2c55] to-[#69c9d0]">
            TikTok Refugee Crisis 🌐
          </h1>
          <p className="text-xl text-[#111111] max-w-2xl mx-auto">
            Track the digital refugee movement and stay informed about the latest developments as millions of content creators become TikTok refugees
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-1">
            <Navigation />
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3">
            <section id="latest-updates" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-[#111111]">
                <span className="mr-2">📰</span> Latest Refugee Updates
              </h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-[#111111]">
                    <span className="mr-2">🔥</span> Breaking News
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {breakingNews.map((news, index) => (
                      <NewsCard key={index} {...news} />
                    ))}
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4 flex items-center text-[#111111]">
                      <span className="mr-2">📺</span> Latest Video Coverage
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <VideoCard
                        title="LA Fires Expected To Get Worse, 24 Dead & Strong Winds Returning, TikTok Refugees Flee to REDNote"
                        url="https://www.youtube.com/watch?v=LhuP_uudSV8"
                      />
                      <VideoCard
                        title="Americans turn to RedNote as TikTok ban looms, raising new privacy concerns"
                        url="https://www.youtube.com/watch?v=i0Z53kPNbyo"
                      />
                      <VideoCard
                        title="Illegal Teaches Migrants how to Invade American Homes on TikTok"
                        url="https://www.youtube.com/shorts/8NoIsUYY7gE"
                      />
                      <VideoCard
                        title="Migrants of TikTok"
                        url="https://www.youtube.com/watch?v=FtZHY2bRbCQ"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-[#111111]">
                    <span className="mr-2">📅</span> Timeline of Events
                  </h3>
                  <Timeline />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center text-[#111111]">
                    <span className="mr-2">💬</span> Official Statements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {officialStatements.map((statement, index) => (
                      <StatementCard key={index} {...statement} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="impact-analysis" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-[#111111]">
                <span className="mr-2">📊</span> Impact Analysis
              </h2>
              <ImpactAnalysis />
            </section>

            <section id="migration-guide" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-[#111111]">
                <span className="mr-2">🚀</span> Migration Guide
              </h2>
              <ComingSoon />
            </section>

            <section id="policy-regulations" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-[#111111]">
                <span className="mr-2">⚖️</span> Policy & Regulations
              </h2>
              <PolicyTimeline />
            </section>

            <section id="community-stories" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-[#111111]">
                <span className="mr-2">👥</span> Community Stories
              </h2>
              <CommunityStories />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
