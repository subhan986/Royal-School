
'use client';

import { FileText, UserCheck, PencilRuler, Send, TestTube2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdmissionForm from '@/components/admissions/admission-form';
import StatusCheck from '@/components/admissions/status-check';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

const admissionSteps = [
  {
    icon: PencilRuler,
    title: 'Apply Online',
    description: 'Fill out our comprehensive online application form with all the required details.',
  },
  {
    icon: Send,
    title: 'Document Submission',
    description: 'Submit the necessary documents, including previous academic records and birth certificate.',
  },
  {
    icon: TestTube2,
    title: 'Admission Test & Interview',
    description: 'Shortlisted candidates will be invited for an entrance test and a subsequent interview.',
  },
];


export default function AdmissionsPage() {
  const [activeTab, setActiveTab] = useState('apply');
  return (
    <div className="relative bg-slate-50/50 dark:bg-slate-900/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Admissions Portal</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin your journey with Royal School of Learning. We are excited to welcome new students to our community.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-1">
                <Card className="sticky top-24 shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">How to Apply</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-6">
                            Follow these simple steps to complete your application process.
                        </p>
                        <ol className="space-y-6">
                            {admissionSteps.map((step, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                                            <step.icon className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-lg">{step.title}</h4>
                                        <p className="text-muted-foreground text-sm">{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </CardContent>
                </Card>
            </div>

            <div className="lg:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
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
        </div>
    </div>
  );
}
