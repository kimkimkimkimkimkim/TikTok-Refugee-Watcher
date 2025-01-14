import Image from "next/image";
import { Navigation } from "@/components/ui/navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">TikTok Refugee Crisis: Live Coverage & Updates</h1>
          <p className="text-xl text-gray-600">Stay informed about the latest developments in the TikTok platform transition</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-1">
            <Navigation />
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Breaking News</h3>
                  {/* Content will be added later */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Timeline of Events</h3>
                  {/* Content will be added later */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Official Statements</h3>
                  {/* Content will be added later */}
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Featured content cards will be added later */}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Quick Resources</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Resource cards will be added later */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
