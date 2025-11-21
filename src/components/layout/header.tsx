'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  Phone,
  Mail,
  Book,
  Facebook,
  Youtube,
  Instagram,
} from 'lucide-react';
import { useState } from 'react';

import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+92418554850" className="hover:underline">
                +92 (41) 855 4850
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:info@royalschooloflearning.edu"
                className="hover:underline"
              >
                info@royalschooloflearning.edu
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <a href="#" className="hidden md:flex items-center gap-2 hover:underline">
                <Book size={16}/>
                <span>Oakridge Publications</span>
             </a>
            <div className="flex items-center gap-3">
               <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity"><Facebook size={18}/></a>
               <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity"><Youtube size={18}/></a>
               <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity"><Instagram size={18}/></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex h-24 items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary pb-1 border-b-2',
                pathname === link.href
                  ? 'text-primary border-primary'
                  : 'text-foreground/60 border-transparent'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center">
          <Link href="/" className="ml-auto flex items-center space-x-2">
            <Image
              src="/ChatGPT Image Nov 21, 2025, 07_54_18 PM.png"
              alt="Royal School of Learning Logo"
              width={80}
              height={80}
              className="h-20 w-20"
            />
          </Link>
        </div>


        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-start space-x-4 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Image
                      src="/ChatGPT Image Nov 21, 2025, 07_54_18 PM.png"
                      alt="Royal School of Learning Logo"
                      width={40}
                      height={40}
                    />
                    <span className="font-bold font-headline">
                      Royal School of Learning
                    </span>
                  </Link>
                </div>
                <nav className="flex-grow mt-6">
                  <ul className="space-y-4">
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            'text-lg font-medium transition-colors hover:text-primary',
                            pathname === link.href
                              ? 'text-primary'
                              : 'text-foreground'
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Button
                  asChild
                  className="w-full mt-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/admissions">Admissions</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="md:hidden">
           <Link href="/" className="ml-auto flex items-center space-x-2">
            <Image
              src="/ChatGPT Image Nov 21, 2025, 07_54_18 PM.png"
              alt="Royal School of Learning Logo"
              width={80}
              height={80}
              className="h-20 w-20"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
