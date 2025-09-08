import { useState, useEffect } from 'react'
import { Client } from '@prismicio/client'

// Types
export interface LandingContent {
  id: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  featuresTitle: string
  featuresDescription: string
  galleryTitle: string
  galleryDescription: string
  contactTitle: string
  contactDescription: string
  features: Feature[]
  socialLinks: SocialLink[]
  contactInfo: ContactInfo[]
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface SocialLink {
  id: string
  platform: string
  url: string
  icon: string
}

export interface ContactInfo {
  id: string
  type: string
  title: string
  value: string
  icon: string
}

// Mock data
const mockContent: LandingContent = {
  id: '1',
  heroTitle: 'BYTEEX',
  heroSubtitle: 'New Collection 2024',
  heroDescription: 'Discover our exclusive collection of premium fashion pieces designed for the modern lifestyle.',
  featuresTitle: 'Why Choose BYTEEX?',
  featuresDescription: 'Experience the perfect blend of style, comfort, and quality in every piece',
  galleryTitle: 'Our Latest Collection',
  galleryDescription: 'Discover the newest trends and timeless pieces from our curated selection',
  contactTitle: 'Get in Touch',
  contactDescription: 'Have questions about our products or need styling advice? We\'d love to hear from you.',
  features: [
    {
      id: '1',
      icon: 'check',
      title: 'Premium Quality',
      description: 'Crafted with the finest materials and attention to detail'
    },
    {
      id: '2',
      icon: 'check',
      title: 'Fast Shipping',
      description: 'Free worldwide shipping on all orders over $100'
    },
    {
      id: '3',
      icon: 'check',
      title: 'Easy Returns',
      description: '30-day hassle-free returns and exchanges'
    }
  ],
  socialLinks: [
    { id: '1', platform: 'Instagram', url: '#', icon: 'instagram' },
    { id: '2', platform: 'Facebook', url: '#', icon: 'facebook' },
    { id: '3', platform: 'Twitter', url: '#', icon: 'twitter' }
  ],
  contactInfo: [
    {
      id: '1',
      type: 'support',
      title: 'Customer Support',
      value: 'support@byteex.com',
      icon: 'user'
    },
    {
      id: '2',
      type: 'sales',
      title: 'Sales Inquiries',
      value: 'sales@byteex.com',
      icon: 'shopping-bag'
    }
  ]
}

// Newsletter subscription
export interface NewsletterData {
  email: string
}

// Contact form
export interface ContactFormData {
  name: string
  email: string
  message: string
}

// Custom hook for landing page content
export function useLandingContent() {
  const [content, setContent] = useState<LandingContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        
        // Try to fetch from Prismic CMS
        try {
          const client = new Client(process.env.VITE_PRISMIC_REPOSITORY_NAME || 'your-repo-name')
          const document = await client.getSingle('landing_page')
          
          // Transform Prismic data to our interface
          const prismicContent: LandingContent = {
            id: document.id,
            heroTitle: document.data.hero_title || mockContent.heroTitle,
            heroSubtitle: document.data.hero_subtitle || mockContent.heroSubtitle,
            heroDescription: document.data.hero_description || mockContent.heroDescription,
            featuresTitle: document.data.features_title || mockContent.featuresTitle,
            featuresDescription: document.data.features_description || mockContent.featuresDescription,
            galleryTitle: document.data.gallery_title || mockContent.galleryTitle,
            galleryDescription: document.data.gallery_description || mockContent.galleryDescription,
            contactTitle: document.data.contact_title || mockContent.contactTitle,
            contactDescription: document.data.contact_description || mockContent.contactDescription,
            features: document.data.features?.map((feature: any, index: number) => ({
              id: `${index + 1}`,
              icon: feature.icon || 'check',
              title: feature.title || '',
              description: feature.description || ''
            })) || mockContent.features,
            socialLinks: mockContent.socialLinks, // Use mock data for social links
            contactInfo: mockContent.contactInfo // Use mock data for contact info
          }
          
          setContent(prismicContent)
        } catch (prismicError) {
          console.log('Prismic fetch failed, using mock data:', prismicError)
          setContent(mockContent)
        }
      } catch (err) {
        console.error('Error fetching content:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
        setContent(mockContent) // Fallback to mock data
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  return { content, loading, error }
}

// Newsletter subscription hook
export function useNewsletterSubscription() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const subscribe = async (data: NewsletterData) => {
    try {
      setLoading(true)
      setError(null)
      
      // Here you would integrate with your newsletter service
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Newsletter subscription:', data)
      setSuccess(true)
      
      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Subscription failed')
    } finally {
      setLoading(false)
    }
  }

  return { subscribe, loading, success, error }
}

// Contact form hook
export function useContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitForm = async (data: ContactFormData) => {
    try {
      setLoading(true)
      setError(null)
      
      // Validate form data
      if (!data.name || !data.email || !data.message) {
        throw new Error('All fields are required')
      }
      
      // Here you would integrate with your contact form service
      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Contact form submission:', data)
      setSuccess(true)
      
      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Form submission failed')
    } finally {
      setLoading(false)
    }
  }

  return { submitForm, loading, success, error }
}

export default useLandingContent
