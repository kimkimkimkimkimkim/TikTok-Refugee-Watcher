'use client';

import { Card } from "@/components/ui/card";
import Link from "next/link";

interface StatementCardProps {
  author: string;
  role: string;
  content: string;
  url: string;
}

export function StatementCard({ author, role, content, url }: StatementCardProps) {
  return (
    <Link href={url} target="_blank" className="block transition-transform hover:scale-[1.02]">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="p-6">
          <blockquote className="mb-4">
            <p className="text-lg font-medium text-[#111111] mb-4 italic">"{content}"</p>
          </blockquote>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
              {author.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-[#111111]">{author}</h3>
              <p className="text-gray-600 text-sm">{role}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
