import { Navigation } from "@/components/ui/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:col-span-1">
          <Navigation />
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3">
          {children}
        </main>
      </div>
    </div>
  );
}
