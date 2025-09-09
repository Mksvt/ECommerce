import { useState, useEffect } from 'react';
import * as prismic from '@prismicio/client';
import { client } from '../prismic';

// This defines the shape of the "data" object in your Prismic document.
export type LandingPageData = {
  hero_title: prismic.KeyTextField;
  hero_subtitle: prismic.KeyTextField;
  hero_description: prismic.RichTextField;
  hero_button_text: prismic.KeyTextField;
  hero_image: prismic.ImageField;
  about_title: prismic.RichTextField;
  about_description: prismic.RichTextField;
  about_image: prismic.ImageField;
  features: prismic.GroupField<{
    feature_title: prismic.RichTextField;
    feature_description: prismic.RichTextField;
    feature_image: prismic.ImageField;
  }>;
  impact_items: prismic.GroupField<{
    impact_number: prismic.KeyTextField;
    impact_label: prismic.KeyTextField;
  }>;
  faq_title: prismic.RichTextField;
  faq_items: prismic.GroupField<{
    question: prismic.RichTextField;
    answer: prismic.RichTextField;
  }>;
  social_links: prismic.GroupField<{
    social_platform_name: prismic.KeyTextField;
    social_link_url: prismic.LinkField;
  }>;
};

// This defines the entire document object, including metadata like id, uid, etc.
export type LandingPageDocument = prismic.PrismicDocument<LandingPageData>;

/**
 * Custom hook to fetch the landing page content from Prismic.
 */
export function useLandingContent() {
  const [document, setDocument] = useState<LandingPageDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const doc = await client.getSingle<LandingPageDocument>('landing_page');

        if (doc) {
          setDocument(doc);
        } else {
          throw new Error('Content not found');
        }
      } catch (err) {
        console.error('Error fetching content from Prismic:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { document, loading, error };
}

export interface NewsletterData {
  email: string;
}

export function useNewsletterSubscription() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (data: NewsletterData) => {
    try {
      setLoading(true);
      setError(null);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Newsletter subscription:', data);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Subscription failed');
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, success, error };
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: ContactFormData) => {
    try {
      setLoading(true);
      setError(null);
      if (!data.name || !data.email || !data.message) {
        throw new Error('All fields are required');
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Contact form submission:', data);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Form submission failed');
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading, success, error };
}

export default useLandingContent;
