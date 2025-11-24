
import { MOCK_STAFF } from '@/lib/constants';
import StaffCard from '@/components/staff/staff-card';

export default function StaffPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Dedicated Staff</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet the experienced and passionate team behind Royal School of Learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {MOCK_STAFF.map((staffMember) => (
          <StaffCard key={staffMember.id} staff={staffMember} />
        ))}
      </div>
    </div>
  );
}
