'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

const formSchema = z.object({
  applicationId: z.string().min(5, 'Application ID must be at least 5 characters.'),
});

type Status = 'pending' | 'accepted' | 'rejected' | 'not_found';

const statusInfo = {
  pending: {
    title: 'Application Pending',
    description: 'Your application is currently under review. We will update the status soon.',
    icon: Clock,
    variant: 'default',
  },
  accepted: {
    title: 'Congratulations! Application Accepted',
    description: 'Welcome to Royal School of Learning! Please check your email for further instructions on the enrollment process.',
    icon: CheckCircle2,
    variant: 'default',
    className: 'border-green-500 bg-green-50 text-green-800 [&>svg]:text-green-600'
  },
  rejected: {
    title: 'Application Update',
    description: 'We regret to inform you that we are unable to offer a place at this time. We wish you the best in your future endeavors.',
    icon: XCircle,
    variant: 'destructive',
  },
  not_found: {
    title: 'Application Not Found',
    description: 'We could not find an application with this ID. Please check the ID and try again.',
    icon: XCircle,
    variant: 'destructive',
  },
};


export default function StatusCheck() {
  const [status, setStatus] = useState<Status | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicationId: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock logic for status check
    if (values.applicationId === '12345') {
        setStatus('pending');
    } else if (values.applicationId === '54321') {
        setStatus('accepted');
    } else {
        setStatus('not_found');
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          Check Your Application Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="applicationId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the ID you received after submission" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Check Status</Button>
          </form>
        </Form>
        {status && statusInfo[status] && (
           <Alert variant={statusInfo[status].variant as any} className={statusInfo[status].className}>
            <statusInfo[status].icon className="h-4 w-4" />
            <AlertTitle>{statusInfo[status].title}</AlertTitle>
            <AlertDescription>
                {statusInfo[status].description}
            </AlertDescription>
        </Alert>
        )}
      </CardContent>
    </Card>
  );
}
