import { MOCK_NEWS } from "@/lib/constants";
import NewsCard from "@/components/news/news-card";

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">News & Events</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay up-to-date with the latest happenings at Royal School of Learning.
        </p>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        {MOCK_NEWS.map((item) => (
          <NewsCard key={item.id} article={item} />
        ))}
      </div>
    </div>
  );
}
