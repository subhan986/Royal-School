
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const galleryImages = [
  {
    id: 'gallery-1',
    src: '/gallery/gallery1.jpg',
    description: 'A moment from our school sports day.',
    hint: 'school sports'
  },
  {
    id: 'gallery-2',
    src: '/gallery/gallery2.jpg',
    description: 'Students engaged in a science fair project.',
    hint: 'science fair'
  },
  {
    id: 'gallery-3',
    src: '/gallery/gallery3.jpg',
    description: 'Art class creations on display.',
    hint: 'art class'
  },
  {
    id: 'gallery-4',
    src: '/gallery/gallery4.jpg',
    description: 'Our annual school play performance.',
    hint: 'school play'
  },
  {
    id: 'gallery-5',
    src: '/gallery/gallery5.jpg',
    description: 'The school band performing at an event.',
    hint: 'school band'
  },
  {
    id: 'gallery-6',
    src: '/gallery/gallery6.jpg',
    description: 'Students collaborating in the library.',
    hint: 'school library'
  },
];

export default function GalleryPage() {
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
                  src={image.src}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={image.hint}
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
