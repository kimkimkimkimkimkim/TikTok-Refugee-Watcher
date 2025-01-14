'use client';

import { Card } from "@/components/ui/card";

interface PolicyEvent {
  date: string;
  title: string;
  content: string;
  sources: Array<{
    id: string;
    url: string;
  }>;
}

const policyEvents: PolicyEvent[] = [
  {
    date: "April 2024",
    title: "PAFACA Enactment",
    content: "President Biden enacted the Protecting Americans from Foreign Controlled Applications Act (PAFACA), which empowers the government to ban foreign-owned applications deemed a threat to national security. This law received bipartisan support due to fears that the Chinese government could exploit TikTok for data collection and misinformation campaigns.",
    sources: [
      { id: "2", url: "https://www.npr.org/2025/01/13/nx-s1-5258151/tiktok-ban-us-impact-prepare-workaround" },
      { id: "3", url: "https://19thnews.org/2025/01/tiktok-ban-popularity-americans-content-creation-news/" }
    ]
  },
  {
    date: "August 2020",
    title: "Initial Executive Order",
    content: "The push to ban TikTok began during President Trump's administration when he signed an executive order prohibiting American companies from engaging in transactions with ByteDance, TikTok's parent company. This marked the beginning of heightened scrutiny on the app, culminating in various legal battles.",
    sources: [
      { id: "3", url: "https://19thnews.org/2025/01/tiktok-ban-popularity-americans-content-creation-news/" },
      { id: "4", url: "https://edition.cnn.com/2025/01/11/tech/tiktok-ban-what-next/index.html" }
    ]
  },
  {
    date: "January 10, 2025",
    title: "Supreme Court Hearing",
    content: "The U.S. Supreme Court heard oral arguments regarding the constitutionality of the federal law that would require TikTok to either divest from its Chinese ownership or face a ban. The court's initial indications suggested a leaning towards upholding the law, raising concerns for TikTok's future in the U.S.",
    sources: [
      { id: "1", url: "https://www.bbc.com/news/articles/cz9g91gn5ddo" },
      { id: "5", url: "https://www.nytimes.com/article/tiktok-ban.html" }
    ]
  },
  {
    date: "January 19, 2025",
    title: "Potential Ban Enforcement",
    content: "This date marks the potential enforcement of the ban if no legal intervention occurs. Under the proposed law, major technology companies like Apple and Google would be prohibited from distributing or updating TikTok, effectively leading to its operational demise in the U.S. market.",
    sources: [
      { id: "2", url: "https://www.npr.org/2025/01/13/nx-s1-5258151/tiktok-ban-us-impact-prepare-workaround" },
      { id: "4", url: "https://edition.cnn.com/2025/01/11/tech/tiktok-ban-what-next/index.html" }
    ]
  }
];

export function PolicyTimeline() {
  return (
    <div className="space-y-8">
      <Card className="p-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <h3 className="text-2xl font-bold mb-4">Key Developments in TikTok Ban Policies</h3>
        <div className="space-y-6">
          {policyEvents.map((event, index) => (
            <div key={index} className="relative pl-8 pb-6 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-200" />
              
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-blue-500" />
              
              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-semibold text-blue-600">{event.date}</span>
                  <h4 className="text-lg font-semibold text-[#111111]">{event.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {event.content.replace(/"/g, '&quot;')}
                </p>
                
                {/* Sources */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {event.sources.map((source, sIndex) => (
                    <a
                      key={sIndex}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800"
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
            </div>
          ))}
        </div>
      </Card>

      {/* Additional Information */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Ongoing Legal Challenges</h4>
            <p className="text-gray-700">
              TikTok has consistently argued that these policies infringe on First Amendment rights and have sought legal recourse to challenge the constitutionality of the ban. The company claims that allegations regarding data misuse are based on "inaccurate, flawed, and hypothetical information" <a href="https://www.bbc.com/news/articles/cz9g91gn5ddo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">[1]</a><a href="https://19thnews.org/2025/01/tiktok-ban-popularity-americans-content-creation-news/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">[3]</a>.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Future Considerations</h4>
            <p className="text-gray-700">
              If Trump were to take office again, he might consider various options regarding TikTok, including lobbying Congress to repeal the law or allowing companies to continue providing services for TikTok without enforcement of the ban <a href="https://edition.cnn.com/2025/01/11/tech/tiktok-ban-what-next/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">[4]</a>. Another possibility includes reviving a national security agreement that would allow Oracle to manage U.S. user data for TikTok, ensuring compliance with U.S. regulations <a href="https://www.npr.org/2025/01/13/nx-s1-5258151/tiktok-ban-us-impact-prepare-workaround" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">[2]</a>.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
