
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-thumb-'));

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Image Gallery</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into the vibrant life at Royal School of Learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <Card key={image.id} className="overflow-hidden group shadow-lg">
             <div className="relative aspect-video overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
            </div>
            <div className="p-4 bg-card">
              <p className="font-body text-muted-foreground">{image.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
