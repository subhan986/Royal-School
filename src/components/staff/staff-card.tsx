
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type StaffMember = {
  id: number;
  name: string;
  role: string;
  imageId: string;
  bio: string;
};

type StaffCardProps = {
  staff: StaffMember;
};

export default function StaffCard({ staff }: StaffCardProps) {
  const staffImage = PlaceHolderImages.find((img) => img.id === staff.imageId);

  return (
    <Card className="flex flex-col text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {staffImage && (
        <div className="relative w-full aspect-square">
          <Image
            src={staffImage.imageUrl}
            alt={`Portrait of ${staff.name}`}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={staffImage.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{staff.name}</CardTitle>
        <p className="font-body text-primary font-semibold">{staff.role}</p>
      </CardHeader>
      <CardContent>
        <p className="font-body text-muted-foreground">{staff.bio}</p>
      </CardContent>
    </Card>
  );
}
