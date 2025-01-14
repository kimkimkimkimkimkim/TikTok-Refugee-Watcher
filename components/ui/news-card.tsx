'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { formatDistanceToNow } from 'date-fns';

interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
}

export function NewsCard({ title, description, url, source, publishedAt }: NewsCardProps) {
  return (
    <Link href={url} target="_blank" className="block transition-transform hover:scale-[1.02]">
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              {source}
            </span>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
            </span>
          </div>
          <CardTitle className="text-lg font-semibold mb-2 text-[#111111] hover:text-[#fe2c55] transition-colors line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
