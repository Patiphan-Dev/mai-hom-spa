export type ServiceCategory = "massage" | "spa" | "treatment" | "package";

export interface ServiceDurationOption {
  minutes: 60 | 90 | 120;
  price: number;
}

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  description: string;
  image: string;
  durations: ServiceDurationOption[];
  startingPrice: number;
  steps: string[];
  benefits: string[];
  precautions: string[];
  relatedSlugs: string[];
  popular?: boolean;
}

export interface Therapist {
  slug: string;
  name: string;
  photo: string;
  yearsExperience: number;
  specialties: string[];
  languages: string[];
  bio: string;
  schedule: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  serviceSlug: string;
  date: string;
  photo?: string;
}

export interface Promotion {
  slug: string;
  title: string;
  description: string;
  discountLabel: string;
  validUntil: string;
  image: string;
  terms: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  publishedAt: string;
  readMinutes: number;
  tags: string[];
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
  phone: string;
  openHours: { day: string; hours: string }[];
  hasParking: boolean;
}

export interface GalleryImage {
  id: string;
  category: "atmosphere" | "room" | "facility";
  caption: string;
  image: string;
}

export interface BookingFormData {
  serviceSlug: string;
  date: string;
  time: string;
  branchId: string;
  therapistSlug?: string;
  guests: number;
  note?: string;
}
