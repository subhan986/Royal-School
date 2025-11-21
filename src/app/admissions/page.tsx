import { FileText, UserCheck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdmissionForm from '@/components/admissions/admission-form';
import StatusCheck from '@/components/admissions/status-check';

export default function AdmissionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Admissions Portal</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Begin your journey with Royal School of Learning. We are excited to welcome new students to our community.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="apply" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="apply">
              <FileText className="mr-2 h-4 w-4" />
              New Application
            </TabsTrigger>
            <TabsTrigger value="status">
              <UserCheck className="mr-2 h-4 w-4" />
              Check Status
            </TabsTrigger>
          </TabsList>
          <TabsContent value="apply">
            <AdmissionForm />
          </TabsContent>
          <TabsContent value="status">
            <StatusCheck />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
