'use server';

import {
  enhanceNewsArticle,
  EnhanceNewsArticleInput,
} from '@/ai/flows/enhance-news-with-ai';

export async function enhanceArticleAction(input: EnhanceNewsArticleInput) {
  try {
    const result = await enhanceNewsArticle(input);
    if (result.enhancedContent) {
      // Basic markdown to HTML conversion for bold, to be used with dangerouslySetInnerHTML
      const htmlContent = result.enhancedContent
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');
      return { enhancedContent: htmlContent, error: null };
    }
    return { enhancedContent: null, error: 'Failed to get enhanced content.' };
  } catch (error) {
    console.error(error);
    return {
      enhancedContent: null,
      error: 'An unexpected error occurred while enhancing the article.',
    };
  }
}
