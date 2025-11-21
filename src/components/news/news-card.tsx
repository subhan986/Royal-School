'use client';

import Image from 'next/image';
import { useState } from 'react';
import { format } from 'date-fns';
import { Sparkles, Loader2 } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { enhanceArticleAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '../ui/skeleton';

type Article = {
  id: number;
  title: string;
  date: string;
  imageId: string;
  content: string;
};

type NewsCardProps = {
  article: Article;
};

export default function NewsCard({ article }: NewsCardProps) {
  const newsImage = PlaceHolderImages.find((img) => img.id === article.imageId);
  const [isEnhanced, setIsEnhanced] = useState(false);
  const [enhancedContent, setEnhancedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleToggle = async (checked: boolean) => {
    setIsEnhanced(checked);
    if (checked && !enhancedContent) {
      setIsLoading(true);
      const result = await enhanceArticleAction({ articleContent: article.content });
      setIsLoading(false);
      
      if (result.error) {
        toast({
          variant: 'destructive',
          title: 'AI Enhancement Failed',
          description: result.error,
        });
        setIsEnhanced(false); // Toggle back if there's an error
      } else {
        setEnhancedContent(result.enhancedContent);
      }
    }
  };

  return (
    <Card className="shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {newsImage && (
        <div className="relative w-full h-64">
          <Image
            src={newsImage.imageUrl}
            alt={newsImage.description}
            fill
            className="object-cover"
            data-ai-hint={newsImage.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-3xl">{article.title}</CardTitle>
        <CardDescription className="font-body text-base">
          {format(new Date(article.date), 'MMMM d, yyyy')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="font-body text-lg/relaxed text-foreground/80 space-y-4">
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ) : isEnhanced && enhancedContent ? (
            <div dangerouslySetInnerHTML={{ __html: enhancedContent }} />
          ) : (
            <p>{article.content}</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-2">
          <Switch 
            id={`ai-enhance-${article.id}`} 
            checked={isEnhanced} 
            onCheckedChange={handleToggle}
            disabled={isLoading}
            aria-label="Enhance with AI"
          />
          <Label htmlFor={`ai-enhance-${article.id}`} className="flex items-center gap-2 font-body">
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 text-accent" />}
            {isLoading ? 'Enhancing...' : 'AI Highlights'}
          </Label>
        </div>
      </CardFooter>
    </Card>
  );
}
