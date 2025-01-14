'use client';

import { Card } from "@/components/ui/card";

interface ImpactSection {
  title: string;
  content: string[];
}

const impactData: ImpactSection[] = [
  {
    title: "Shift in User Engagement",
    content: [
      "Increased Activity on Xiaohongshu: The influx of American users has propelled Xiaohongshu to become the most downloaded app in the U.S. App Store. This surge indicates a shift in user engagement from TikTok to a new platform, creating opportunities for content creators to establish a presence in a less saturated environment.",
      "Cultural Exchange: The arrival of TikTok refugees has fostered a unique cultural exchange between American and Chinese users, with many engaging in discussions and collaborations that were previously rare. This interaction can lead to diverse content creation that blends different cultural perspectives."
    ]
  },
  {
    title: "Economic Implications for Creators",
    content: [
      "New Monetization Opportunities: As Xiaohongshu is known for its social shopping features and influencer marketing potential, content creators migrating from TikTok may find new avenues for monetization through brand partnerships and product promotions specific to the platform's audience.",
      "Loss of Established Revenue Streams: Conversely, creators who relied heavily on TikTok's monetization features may face challenges as they transition to a new platform where they are less established and have fewer followers initially."
    ]
  },
  {
    title: "Content Creation Dynamics",
    content: [
      "Adaptation to New Formats: Creators will need to adapt their content strategies to align with Xiaohongshu's interface and user expectations, which differ from TikTok's algorithm and engagement styles. This may involve learning new trends, formats, and audience preferences unique to Xiaohongshu.",
      "Community Building: Many TikTok refugees are actively seeking connections on Xiaohongshu by introducing themselves and sharing interests. This community-building aspect is crucial as it allows creators to quickly establish rapport with new audiences, fostering loyalty and engagement."
    ]
  },
  {
    title: "Political and Social Context",
    content: [
      "Protest Against Government Actions: The migration is not just about finding a new platform; it also serves as a form of protest against perceived government overreach regarding TikTok. This sentiment resonates with many users who view their move as a stand for free expression, potentially influencing the types of content shared on Xiaohongshu.",
      "Concerns Over Data Privacy: Some creators express indifference towards data privacy concerns associated with using a Chinese app. This attitude may reflect a broader trend among younger audiences who prioritize access to platforms over privacy issues, impacting how they engage with content and brands."
    ]
  },
  {
    title: "Long-Term Viability",
    content: [
      "Sustainability of Interest in Xiaohongshu: While the initial surge in downloads is promising, it remains uncertain whether Xiaohongshu can maintain this level of interest among American users long-term. Continued scrutiny from U.S. authorities regarding Chinese apps could influence user retention and engagement strategies moving forward."
    ]
  }
];

export function ImpactAnalysis() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="p-6">
        <h3 className="text-2xl font-bold mb-4">Impact Analysis of the TikTok Refugee Event</h3>
        <p className="text-gray-700 leading-relaxed">
          The migration of TikTok users to Xiaohongshu, termed "TikTok refugees," has significant implications for content creators, 
          the social media landscape, and cross-cultural interactions. Below is an analysis of the various impacts observed as of January 2025.
        </p>
      </Card>

      {/* Impact Sections */}
      <div className="grid grid-cols-1 gap-6">
        {impactData.map((section, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-semibold mb-4 text-[#111111]">
              {section.title}
            </h4>
            <div className="space-y-4">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Conclusion */}
      <Card className="p-6 bg-gray-50">
        <h4 className="text-xl font-semibold mb-4 text-blue-800">Conclusion</h4>
        <p className="text-gray-700 leading-relaxed">
          The event of TikTok refugees migrating to Xiaohongshu presents both opportunities and challenges for content creators. 
          While it opens doors for cultural exchange and new monetization strategies, it also requires adaptation to a different 
          platform landscape amidst ongoing political tensions. The long-term effects on user engagement and content dynamics will 
          depend on how both creators and the platform navigate these changes in the coming months.
        </p>
      </Card>
    </div>
  );
}
