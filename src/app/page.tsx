
'use client';

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
  Building,
  Quote,
  Users,
  Award,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MOCK_NEWS } from '@/lib/constants';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

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
    'Educational Workshops',
];

const Counter = ({ to, duration }: { to: number; duration: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = to;
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <div ref={ref}>{count.toLocaleString()}+</div>;
};

export default function Home() {
  const careerImage = PlaceHolderImages.find((img) => img.id === 'career-image');
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 relative">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image 
                    src="/ChatGPT Image Nov 25, 2025, 10_24_18 PM.png"
                    alt="Faint background logo"
                    width={500}
                    height={500}
                    className="opacity-5"
                />
            </div>
        </div>

        <div className="relative z-10">
            {/* Hero Section */}
            <section className="relative bg-background overflow-hidden">
                <div className="relative min-h-[70vh] md:min-h-[70vh] py-12 md:py-0 flex items-center">
                    <div className="absolute inset-0 bg-background z-0">
                        <div className="absolute inset-y-0 left-0 w-full md:w-[40%] bg-secondary" style={{ clipPath: 'ellipse(150% 70% at -50% 50%)' }}></div>
                        <div className="hidden md:block absolute inset-y-0 left-0 w-[15%] bg-primary" style={{ clipPath: 'ellipse(100% 75% at 0% 50%)' }}></div>
                        <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 bg-background" style={{ clipPath: 'ellipse(100% 75% at 100% 50%)' }}></div>
                        <div className="hidden md:block absolute inset-y-0 right-0 w-[20%] bg-yellow-300" style={{ clipPath: 'ellipse(100% 75% at 100% 50%)' }}></div>
                        <div className="hidden md:block absolute inset-y-0 right-0 w-[12%] bg-red-500" style={{ clipPath: 'ellipse(100% 75% at 100% 50%)' }}></div>
                    </div>
                    <div className="container mx-auto h-full flex items-center relative z-10 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                            <div className="text-foreground text-center md:text-left">
                                <h1 className="text-5xl md:text-6xl font-bold font-headline leading-tight md:leading-snug animate-fade-in-zoom text-muted" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                  Learn With Purpose.
                                  <br />
                                  Lead With Confidence.
                                </h1>
                                <p className="mt-4 text-lg text-muted/90 max-w-xl animate-fade-in-zoom" style={{ animationDelay: '0.2s', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                                  Royal School of Learning delivers a future-focused education that builds knowledge, character, and leadership.
                                </p>
                            </div>
                            <div className="relative flex justify-center md:justify-end items-center h-full mt-8 md:mt-0">
                                <Image src="/ChatGPT Image Nov 25, 2025, 10_24_18 PM.png" alt="Royal School of Learning Logo" width={350} height={350} className="relative z-10 animate-fade-in-zoom" />
                            </div>
                        </div>
                    </div>
                </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-background rounded-t-full"></div>
            </section>

            {/* Your Career Starts With Us Section */}
            <section className="py-20 lg:py-24 bg-background">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left">
                    <p className="text-primary font-semibold font-body mb-2">Welcome to The Royal School</p>
                    <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Your Career Starts With Us.</h2>
                    <p className="text-muted-foreground font-body text-lg mb-6">
                      We're a great place for your kids to learn and grow. We have wonderful teachers who work hard to help students succeed. We offer lots of different classes and activities to make learning fun.
                    </p>
                    <Button asChild size="lg" className="font-bold">
                      <Link href="/admissions">Apply For Admission</Link>
                    </Button>
                  </div>
                  <div className="relative mt-8 md:mt-0">
                    <Image
                      src="/school.png"
                      alt="A welcoming image of the school building"
                      width={700}
                      height={500}
                      className="rounded-lg shadow-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* About RSL Section */}
            <section className="py-20 lg:py-24">
              <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">About RSL</h2>
                <p className="font-body text-muted-foreground text-lg mb-8">
                  It is the aim of Royal School of Learning to teach children to be proud of who they are, to be confident of their latent skills and to be creative, Godly, and develop a love of a lifetime for learning.
                </p>
                <Button variant="outline">Read More</Button>
              </div>
            </section>
            
            {/* Why Choose Us Section */}
            <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
              <Image
                src="/ChatGPT Image Nov 25, 2025, 10_24_18 PM.png"
                alt="background"
                fill
                className="object-contain object-center opacity-5 dark:opacity-10 scale-150"
              />
              <div className="container mx-auto px-4 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Why Choose Us</h2>
                    <p className="text-muted-foreground font-body text-lg">
                      The sole purpose of our efforts is to provide an environment & a meaningful atmosphere to our students in which they can grow up to be responsible, Godly and successful in life.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow bg-card">
                      <Award className="h-10 w-10 mx-auto text-primary mb-3" />
                      <h3 className="font-headline text-xl font-semibold">Certified Staff</h3>
                      <a href="#" className="text-sm text-primary hover:underline font-body">Learn More</a>
                    </Card>
                    <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow bg-card">
                      <GraduationCap className="h-10 w-10 mx-auto text-primary mb-3" />
                      <h3 className="font-headline text-xl font-semibold">Admission</h3>
                       <a href="/admissions" className="text-sm text-primary hover:underline font-body">Learn More</a>
                    </Card>
                    <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow bg-card">
                      <Users className="h-10 w-10 mx-auto text-primary mb-3" />
                      <h3 className="font-headline text-xl font-semibold">Student Council</h3>
                       <a href="#" className="text-sm text-primary hover:underline font-body">Learn More</a>
                    </Card>
                    <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow bg-card">
                      <Building className="h-10 w-10 mx-auto text-primary mb-3" />
                      <h3 className="font-headline text-xl font-semibold">Infrastructure</h3>
                       <a href="#" className="text-sm text-primary hover:underline font-body">Learn More</a>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* RSL Progress Dashboard */}
            <section className="py-20 lg:py-24 bg-primary text-primary-foreground">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <p className="font-body uppercase tracking-widest">Our Progress So Far</p>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold">RSL Progress Dashboard</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-6xl font-bold font-headline"><Counter to={500} duration={2} /></div>
                    <p className="text-lg font-body mt-2">Students</p>
                  </div>
                  <div>
                    <div className="text-6xl font-bold font-headline"><Counter to={8} duration={1} /></div>
                    <p className="text-lg font-body mt-2">Branches</p>
                  </div>
                  <div>
                    <div className="text-6xl font-bold font-headline"><Counter to={250} duration={2} /></div>
                    <p className="text-lg font-body mt-2">Overall Ranking</p>
                  </div>
                </div>
              </div>
            </section>

            {/* RSL News & Events */}
            <section className="py-20 lg:py-32">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16">
                  RSL News & Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {MOCK_NEWS.slice(0, 3).map((item) => {
                    const newsImage = PlaceHolderImages.find(
                      (img) => img.id === item.imageId
                    );
                    return (
                      <Card
                        key={item.id}
                        className="overflow-hidden flex flex-col group shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border-0"
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
                         <CardContent className="pt-6 flex-grow">
                          <h3 className="font-headline text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground line-clamp-3 font-body text-sm">
                            {item.content}
                          </p>
                        </CardContent>
                        <div className="p-6 pt-0">
                          <Button
                            asChild
                            variant="link"
                            className="p-0 h-auto font-bold text-sm"
                          >
                            <Link href="/news">
                              Read More <ArrowRight className="ml-1 h-4 w-4" />
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
                      View All News
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* What People Say */}
            <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/50">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-center mb-16">
                  What People Say?
                </h2>
                <div className="max-w-3xl mx-auto">
                  <Card className="bg-primary/10 border-l-4 border-primary p-8 text-center shadow-lg">
                    <Quote className="h-12 w-12 text-primary mx-auto mb-4" />
                    <blockquote className="text-lg md:text-xl font-body text-foreground/80 italic mb-4">
                      "Royal School of Learning has been a transformative experience for our children. The dedicated teachers and supportive environment have helped them excel academically and personally. We couldn't be happier with our choice."
                    </blockquote>
                    <cite className="font-headline font-bold not-italic">- The Ahmed Family</cite>
                  </Card>
                </div>
              </div>
            </section>
        </div>
      </main>
    </div>
  );
}

    

    