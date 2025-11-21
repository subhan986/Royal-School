import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  GraduationCap,
  MapPin,
  Newspaper,
  Phone,
  Camera,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MOCK_NEWS } from '@/lib/constants';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-campus');
const galleryImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-thumb-'));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tight text-shadow-lg">
              Welcome to Gattwala Academy
            </h1>
            <p className="mt-4 text-lg md:text-xl font-body max-w-2xl mx-auto">
              Nurturing young minds for a brighter future through excellence in education and character development.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="/admissions">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                    <GraduationCap className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground">
                    To provide a stimulating learning environment that inspires students to achieve their full potential and become lifelong learners.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4">
                    <BookOpen className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-2xl">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground">
                    To be a leading educational institution recognized for our commitment to academic excellence, innovation, and holistic development.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                    <Newspaper className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground">
                    We foster respect, integrity, curiosity, and collaboration, creating a community of responsible and compassionate global citizens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
              Latest News & Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_NEWS.slice(0, 3).map((item) => {
                const newsImage = PlaceHolderImages.find(img => img.id === item.imageId);
                return (
                  <Card key={item.id} className="overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {newsImage && (
                       <div className="relative w-full h-48">
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
                      <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground line-clamp-3 font-body">{item.content}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button asChild variant="link" className="p-0 h-auto">
                        <Link href="/news">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="font-bold">
                  <Link href="/news">
                    <Newspaper className="mr-2 h-5 w-5" /> View All News
                  </Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
              Campus Life
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg" className="font-bold">
                  <Link href="/gallery">
                    <Camera className="mr-2 h-5 w-5" /> View Gallery
                  </Link>
                </Button>
            </div>
          </div>
        </section>
        
        {/* Contact Info */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Get in Touch
            </h2>
            <p className="font-body max-w-2xl mx-auto text-muted-foreground mb-8">
              We'd love to hear from you. Reach out with any questions or to schedule a visit.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span>FSD Officer Colony, Gattwala</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+921234567890" className="hover:underline">+92 123 4567890</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
