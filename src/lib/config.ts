interface Config {
  sanity: {
    projectId: string;
    dataset: string;
    apiVersion: string;
    token?: string;
  };
  web3forms: {
    accessKey: string;
  };
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  seo: {
    siteUrl: string;
    siteName: string;
  };
}

const config: Config = {
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3xocruq4',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-06-16',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  },
  web3forms: {
    accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '8ef43672-b181-45b1-a57d-06ca34843a42',
  },
  contact: {
    phone: '+971 58 690 0124',
    email: 'enquiry@toolexuae.com',
    whatsapp: '971586900124',
  },
  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://toolexuae.com',
    siteName: 'ToolexUAE',
  },
};

export default config; 