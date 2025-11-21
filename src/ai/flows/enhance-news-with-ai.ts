'use server';

/**
 * @fileOverview Enhances news articles with AI to highlight key information.
 *
 * - enhanceNewsArticle - A function that enhances a news article by identifying and highlighting key information.
 * - EnhanceNewsArticleInput - The input type for the enhanceNewsArticle function.
 * - EnhanceNewsArticleOutput - The return type for the enhanceNewsArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceNewsArticleInputSchema = z.object({
  articleContent: z.string().describe('The full text content of the news article.'),
});
export type EnhanceNewsArticleInput = z.infer<typeof EnhanceNewsArticleInputSchema>;

const EnhanceNewsArticleOutputSchema = z.object({
  enhancedContent: z
    .string()
    .describe(
      'The news article content with key information (names, topics, dates) highlighted.'
    ),
});
export type EnhanceNewsArticleOutput = z.infer<typeof EnhanceNewsArticleOutputSchema>;

export async function enhanceNewsArticle(
  input: EnhanceNewsArticleInput
): Promise<EnhanceNewsArticleOutput> {
  return enhanceNewsArticleFlow(input);
}

const enhanceNewsArticlePrompt = ai.definePrompt({
  name: 'enhanceNewsArticlePrompt',
  input: {schema: EnhanceNewsArticleInputSchema},
  output: {schema: EnhanceNewsArticleOutputSchema},
  prompt: `You are an AI assistant designed to enhance news articles by highlighting key information.  Your goal is to make it easier for readers to quickly grasp the most important details.

  Given the following news article, identify and highlight key information such as important names, topics, and dates using markdown bolding.  Return the enhanced article. Ensure that the original article's formatting and structure are preserved as much as possible.

  Article Content: {{{articleContent}}} `,
});

const enhanceNewsArticleFlow = ai.defineFlow(
  {
    name: 'enhanceNewsArticleFlow',
    inputSchema: EnhanceNewsArticleInputSchema,
    outputSchema: EnhanceNewsArticleOutputSchema,
  },
  async input => {
    const {output} = await enhanceNewsArticlePrompt(input);
    return output!;
  }
);
