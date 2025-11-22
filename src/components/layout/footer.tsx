
import { GraduationCap, MapPin, Phone, Mail, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-gray-900 border-t">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/ChatGPT Image Nov 21, 2025, 07_54_18 PM.png" alt="Royal School of Learning Logo" width={40} height={40} />
              <span className="font-bold font-headline text-xl">
                Royal School of Learning
              </span>
            </Link>
            <p className="text-muted-foreground font-body text-sm">Nurturing young minds for a brighter future.</p>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 font-body text-muted-foreground text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 shrink-0 text-primary" />
                <span>FSD Officer Colony, Gattwala, Faisalabad, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 shrink-0 text-primary" />
                <a href="tel:+92418554850" className="hover:text-primary">+92 (41) 855 4850</a>
              </li>
               <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 shrink-0 text-primary" />
                <a href="mailto:info@royalschooloflearning.edu" className="hover:text-primary">info@royalschooloflearning.edu</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 text-center text-muted-foreground font-body text-sm">
          <p>&copy; {new Date().getFullYear()} Royal School of Learning. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
