'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import React from 'react';

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
import { submitApplicationAction } from '@/app/admissions/actions';
import { Loader2 } from 'lucide-react';

const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const fileSchema = z
  .any()
  .refine((files) => files?.length === 1, "File is required.")
  .refine(
    (files) => files?.[0]?.size <= MAX_FILE_SIZE,
    `Max file size is 5MB.`
  )
  .refine(
    (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
    "Only .jpg, .png, and .pdf formats are supported."
  );

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
  
  birthCertificate: fileSchema,
  reportCard: fileSchema,

  declaration: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

export default function AdmissionForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      dateOfBirth: '',
      gender: '',
      applyingForGrade: '',
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      address: '',
      previousSchool: '',
      declaration: false,
    },
  });
  
  const birthCertificateRef = form.register("birthCertificate");
  const reportCardRef = form.register("reportCard");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const formData = new FormData();
    
    // Append all form values to formData
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'birthCertificate' || key === 'reportCard') {
        if (value instanceof FileList && value.length > 0) {
          formData.append(key, value[0]);
        }
      } else if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const result = await submitApplicationAction(formData);

    if (result.success) {
      toast({
        title: 'Application Submitted!',
        description: `Your application has been received. Your application ID is ${result.applicationId}.`,
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: result.error || 'An unknown error occurred.',
      });
    }
    setIsSubmitting(false);
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
                              <Input type="file" accept={ACCEPTED_FILE_TYPES.join(",")} {...birthCertificateRef} />
                          </FormControl>
                           <FormDescription>PDF, JPG, or PNG. Max 5MB.</FormDescription>
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
                              <Input type="file" accept={ACCEPTED_FILE_TYPES.join(",")} {...reportCardRef} />
                          </FormControl>
                          <FormDescription>PDF, JPG, or PNG. Max 5MB.</FormDescription>
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
            
            <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
