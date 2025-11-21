'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '../ui/checkbox';

const formSchema = z.object({
  studentName: z.string().min(2, 'Name must be at least 2 characters.'),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please use YYYY-MM-DD format.'),
  gender: z.string().min(1, 'Please select a gender.'),
  applyingForGrade: z.string().min(1, 'Please select a grade.'),
  
  parentName: z.string().min(2, 'Parent name is required.'),
  parentEmail: z.string().email('Invalid email address.'),
  parentPhone: z.string().min(10, 'Phone number must be at least 10 digits.'),

  address: z.string().min(5, 'Address is required.'),
  previousSchool: z.string().optional(),
  
  birthCertificate: z.any().refine((files) => files?.length == 1, 'Birth certificate is required.'),
  reportCard: z.any().refine((files) => files?.length == 1, 'Previous report card is required.'),

  declaration: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

export default function AdmissionForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      dateOfBirth: '',
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      address: '',
      previousSchool: '',
    },
  });
  
  const birthCertificateRef = form.register("birthCertificate");
  const reportCardRef = form.register("reportCard");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Application Submitted!',
      description: 'Your application has been received. We will review it and get back to you soon. Your application ID is 12345.',
    });
    form.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          Online Application Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Student Information */}
            <h3 className="text-lg font-semibold font-headline">Student Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Ahmed Khan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="applyingForGrade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Applying for Grade</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a grade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => i + 1).map(grade => (
                            <SelectItem key={grade} value={String(grade)}>
                              Grade {grade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
            
            <Separator />
            
            {/* Parent/Guardian Information */}
            <h3 className="text-lg font-semibold font-headline">Parent/Guardian Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent's Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Fatima Ahmed" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="parentEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent's Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="e.g. fatima@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="parentPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent's Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="e.g. 03001234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Home Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />

             {/* Previous Education */}
            <h3 className="text-lg font-semibold font-headline">Previous Education</h3>
             <FormField
                control={form.control}
                name="previousSchool"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous School Name (if any)</FormLabel>
                    <FormControl>
                      <Input placeholder="Name of previous school" {...field} />
                    </FormControl>
                    <FormDescription>Leave blank if not applicable.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <Separator />

            {/* Document Upload */}
            <h3 className="text-lg font-semibold font-headline">Document Upload</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                  control={form.control}
                  name="birthCertificate"
                  render={({ field }) => (
                      <FormItem>
                          <FormLabel>Birth Certificate</FormLabel>
                          <FormControl>
                              <Input type="file" {...birthCertificateRef} />
                          </FormControl>
                          <FormMessage />
                      </FormItem>
                  )}
              />
              <FormField
                  control={form.control}
                  name="reportCard"
                  render={({ field }) => (
                      <FormItem>
                          <FormLabel>Previous Report Card</FormLabel>
                          <FormControl>
                              <Input type="file" {...reportCardRef} />
                          </FormControl>
                          <FormMessage />
                      </FormItem>
                  )}
              />
            </div>

            <Separator />
            
            {/* Declaration */}
            <FormField
              control={form.control}
              name="declaration"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Declaration
                    </FormLabel>
                    <FormDescription>
                      I hereby declare that the information provided is true and correct to the best of my knowledge.
                    </FormDescription>
                     <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Submit Application
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
