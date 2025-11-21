'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5 seconds
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Remove the preloader from the DOM after the fade-out animation completes (0.5s)
    const fadeOutTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out',
        isFadingOut ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="animate-pulse">
        <Image
          src="/ChatGPT Image Nov 21, 2025, 07_54_18 PM.png"
          alt="Royal School of Learning Logo"
          width={150}
          height={150}
          priority
        />
      </div>
    </div>
  );
};

export default Preloader;
