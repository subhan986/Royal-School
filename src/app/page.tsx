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
  Star,
  Book,
  Facebook,
  Youtube,
  Instagram,
  Mail,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MOCK_NEWS } from '@/lib/constants';

const galleryImages = PlaceHolderImages.filter((img) =>
  img.id.startsWith('gallery-thumb-')
);

const salientFeatures = [
    'Extra and Co-curricular Activities',
    'Student Council',
    'Quiz Competitions',
    'Functions',
    'Oratory Competitions',
    'Prize Distribution',
    'Sports Competitions',
    'Excursions & Outings',
    'National & Religious Days Celebrations',
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-background overflow-hidden">
          <div className="relative h-[60vh] md:h-[70vh]">
            <div className="absolute inset-0 bg-background z-0">
              <div className="absolute inset-y-0 left-0 w-7/12 bg-secondary animate-slide-in-left" style={{ clipPath: 'ellipse(100% 75% at 0% 50%)' }}></div>
              <div className="absolute inset-y-0 left-0 w-1/4 bg-primary animate-slide-in-left" style={{ clipPath: 'ellipse(100% 75% at 0% 50%)', animationDelay: '0.2s' }}></div>
              <div className="absolute inset-y-0 right-0 w-1/2 bg-background animate-slide-in-right" style={{ clipPath: 'ellipse(100% 75% at 100% 50%)' }}></div>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '1rem 1rem',
                  }}
                />
            </div>
            <div className="container mx-auto h-full flex items-center relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative flex justify-center items-center h-full">
                  <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white/20 rounded-full blur-2xl"></div>
                  <Image src="/ChatGPT Image Nov 21, 2025, 07_54_18 PM.png" alt="Royal School of Learning Logo" width={300} height={300} className="relative z-10 animate-fade-in-zoom" />
                </div>
                <div className="text-foreground">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 font-headline">Salient Features</h2>
                    <ul className="space-y-3">
                        {salientFeatures.map((feature, index) => (
                            <li key={index} className="flex items-center text-lg md:text-xl font-body">
                                <div className="w-2 h-2 rounded-full bg-primary mr-4"></div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-background rounded-t-full"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-md hover:shadow-2xl transition-shadow duration-300 border-0 bg-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-5 w-fit mb-4">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-3xl">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground text-lg">
                    To provide a stimulating learning environment that
                    inspires students to achieve their full potential and become
                    lifelong learners.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-2xl transition-shadow duration-300 border-0 bg-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-5 w-fit mb-4">
                    <Star className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-3xl">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground text-lg">
                    To be a leading educational institution recognized for our
                    commitment to academic excellence, innovation, and holistic
                    development.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-2xl transition-shadow duration-300 border-0 bg-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-5 w-fit mb-4">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-3xl">
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground text-lg">
                    We foster respect, integrity, curiosity, and collaboration,
                    creating a community of responsible and compassionate global
                    citizens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16">
              Latest News & Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MOCK_NEWS.slice(0, 3).map((item) => {
                const newsImage = PlaceHolderImages.find(
                  (img) => img.id === item.imageId
                );
                return (
                  <Card
                    key={item.id}
                    className="overflow-hidden flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl border-0"
                  >
                    {newsImage && (
                      <div className="relative w-full h-56 overflow-hidden">
                        <Image
                          src={newsImage.imageUrl}
                          alt={newsImage.description}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={newsImage.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground line-clamp-3 font-body text-md">
                        {item.content}
                      </p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto font-bold"
                      >
                        <Link href="/news">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-16">
              <Button asChild size="lg" variant="outline" className="font-bold">
                <Link href="/news">
                  <Newspaper className="mr-2 h-5 w-5" /> View All News
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="py-20 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16">
              Campus Life
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg group"
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button asChild size="lg" className="font-bold">
                <Link href="/gallery">
                  <Camera className="mr-2 h-5 w-5" /> View Gallery
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Get in Touch
            </h2>
            <p className="font-body max-w-2xl mx-auto text-muted-foreground mb-8 text-lg">
              We'd love to hear from you. Reach out with any questions or to
              schedule a visit.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-xl">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span>FSD Officer Colony, Gattwala</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:+921234567890" className="hover:underline">
                  +92 123 4567890
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

    