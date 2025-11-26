
'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

// Define your gallery images here.
// These paths are relative to the `public` folder.
const localGalleryImages = [
  {
    id: '1',
    src: '/482976797_1090117686461772_6216719114921725382_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Community and staff gathering.',
  },
  {
    id: '2',
    src: '/484068026_1090913876382153_6559337845197735647_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Students in red celebrating an event.',
  },
  {
    id: '3',
    src: '/484072488_1090117533128454_6382557431130116620_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'A community event.',
  },
  {
    id: '4',
    src: '/484072829_1090117779795096_7413393825617757701_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Students and staff photo.',
  },
  {
    id: '5',
    src: '/484074246_1090117383128469_8048411293711948376_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'An elder member of the community.',
  },
  {
    id: '6',
    src: '/484205969_1090117426461798_8567560744054068493_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Staff group photo.',
  },
  {
    id: '7',
    src: '/484205969_1090913833048824_4002317942180901155_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Students in red shirts.',
  },
  {
    id: '8',
    src: '/484343389_1090913753048832_4579915439240330472_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Children in festive red attire.',
  },
  {
    id: '9',
    src: '/484454625_1090117386461802_4956374255501622564_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Award ceremony on stage.',
  },
  {
    id: '10',
    src: '/484622612_1094256506047890_3825530290375213158_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Students presenting their work.',
  },
  {
    id: '11',
    src: '/484628201_1094256862714521_2218143636708344273_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Student art project.',
  },
  {
    id: '12',
    src: '/484808393_1090913859715488_7619868358000060493_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Group of students in red.',
  },
  {
    id: '13',
    src: '/487459797_1104066311733576_1947126806968413923_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Students in yellow and orange.',
  },
  {
    id: '14',
    src: '/487468514_1104066161733591_4265609351822106358_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'School assembly or event.',
  },
  {
    id: '15',
    src: '/487984633_1104065901733617_1464367495269202838_n.jpg',
    alt: 'A glimpse into the vibrant life at Royal School of Learning.',
    description: 'Students on stage.',
  }
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
    // This code runs only on the client, after the component has mounted.
    // This avoids hydration mismatch errors between server and client.
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
