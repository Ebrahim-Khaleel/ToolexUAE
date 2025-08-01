export interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
  inStock: boolean;
  slug: {
    current: string;
  };
  specifications?: Record<string, string | number | boolean>;
  images?: string[];
  dataSheet?:{
    asset: {
      url: string;
    };
  }
}

export interface CartItem {
  _id: string;
  name: string;
  imageUrl: string;
  category: string;
  slug: string;
  quantity: number;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface SanityImage {
  asset: {
    url: string;
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}