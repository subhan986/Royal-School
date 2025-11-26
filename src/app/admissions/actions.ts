'use server';

import * as z from 'zod';

// This is a simplified schema for server-side validation.
// In a real app, you would reuse or extend the client-side schema.
const formSchema = z.object({
  studentName: z.string(),
  dateOfBirth: z.string(),
  gender: z.string(),
  applyingForGrade: z.string(),
  parentName: z.string(),
  parentEmail: z.string().email(),
  parentPhone: z.string(),
  address: z.string(),
  previousSchool: z.string().optional(),
  declaration: z.string(),
  birthCertificate: z.instanceof(File),
  reportCard: z.instanceof(File),
});

export async function submitApplicationAction(formData: FormData) {
  try {
    const data = Object.fromEntries(formData);
    const parsed = formSchema.safeParse(data);

    if (!parsed.success) {
      console.error('Validation failed:', parsed.error.flatten().fieldErrors);
      return {
        success: false,
        error: 'Invalid form data. Please check your entries.',
      };
    }
    
    // In a real application, you would process the data here.
    // For example, send it via email using a service like Nodemailer, Resend, or SendGrid.
    // This requires setting up an email transport on the server.

    // For demonstration, we'll just log the data to the server console.
    console.log('New Application Received:');
    console.log('Student Name:', parsed.data.studentName);
    console.log('Parent Email:', parsed.data.parentEmail);
    console.log('Applying for Grade:', parsed.data.applyingForGrade);
    console.log('Birth Certificate:', parsed.data.birthCertificate.name, `${(parsed.data.birthCertificate.size / 1024).toFixed(2)} KB`);
    console.log('Report Card:', parsed.data.reportCard.name, `${(parsed.data.reportCard.size / 1024).toFixed(2)} KB`);

    // Simulate generating a unique application ID
    const applicationId = `RSL-${Date.now().toString().slice(-6)}`;

    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Return a success response
    return {
      success: true,
      applicationId: applicationId,
    };

  } catch (error) {
    console.error('Error submitting application:', error);
    return {
      success: false,
      error: 'An unexpected error occurred on the server. Please try again.',
    };
  }
}
