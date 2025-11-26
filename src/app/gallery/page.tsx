
'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

// Define your gallery images here.
// These paths are relative to the `public` folder.
const localGalleryImages = [
  {
    id: 'local-1',
    src: '/gallery/gallery1.jpg',
    alt: 'A beautiful view from the school campus.',
    description: 'Our serene and inspiring campus.',
  },
  {
    id: 'local-2',
    src: '/gallery/gallery2.jpg',
    alt: 'Students engaged in a classroom activity.',
    description: 'Collaborative learning in action.',
  },
  {
    id: 'local-3',
    src: '/gallery/gallery3.jpg',
    alt: 'The school library, a hub of knowledge.',
    description: 'A quiet place for study and growth.',
  },
  {
    id: 'local-4',
    src: '/gallery/gallery4.jpg',
    alt: 'Science lab experiments.',
    description: 'Hands-on learning in our science labs.',
  },
  {
    id: 'local-5',
    src: '/gallery/gallery5.jpg',
    alt: 'Students playing basketball on the court.',
    description: 'Fostering teamwork through sports.',
  },
  {
    id: 'local-6',
    src: '/gallery/gallery6.jpg',
    alt: 'An art class in progress.',
    description: 'Unleashing creativity in the art studio.',
  },
  {
    id: 'local-7',
    src: '/gallery/gallery7.jpg',
    alt: 'The main school building facade.',
    description: 'Our historic main building.',
  },
  {
    id: 'local-8',
    src: '/gallery/gallery8.jpg',
    alt: 'A school event in the auditorium.',
    description: 'Community events and celebrations.',
  },
];

// Function to shuffle an array
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};


export default function GalleryPage() {
  const [shuffledImages, setShuffledImages] = useState<typeof localGalleryImages>([]);

  useEffect(() => {
    setShuffledImages(shuffleArray([...localGalleryImages]));
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Image Gallery</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A glimpse into the vibrant life at Royal School of Learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shuffledImages.map((image) => (
          <Card key={image.id} className="overflow-hidden group shadow-lg">
             <div className="relative aspect-video overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
