import type { LegalDocument } from './types';

export const kvkkEn: LegalDocument = {
  intro: [
    'This notice explains our obligation to inform you regarding the processing of your personal data under Law No. 6698 on the Protection of Personal Data (KVKK).',
    'For detailed processing activities, please also review our Privacy Policy.',
  ],
  sections: [
    {
      title: '1. Data Controller',
      blocks: [
        {
          type: 'p',
          text: 'Under Law No. 6698 on the Protection of Personal Data (KVKK), your personal data is processed by Pathera in its capacity as data controller.',
        },
        {
          type: 'p',
          text: 'Contact: business@pathera.net — Web: pathera.net',
        },
      ],
    },
    {
      title: '2. Legal Basis for Processing Personal Data',
      blocks: [
        {
          type: 'p',
          text: 'Your personal data is processed on the following legal grounds:',
        },
        {
          type: 'ul',
          items: [
            'Your explicit consent',
            'Establishment or performance of a contract (provision of application services)',
            'Compliance with legal obligations',
            'Legitimate interests in improving services and ensuring security',
          ],
        },
      ],
    },
    {
      title: '3. Purposes of Processing Personal Data',
      blocks: [
        {
          type: 'p',
          text: 'Your personal data may be processed for the following purposes:',
        },
        {
          type: 'ul',
          items: [
            'Providing Pathera AI travel planning services',
            'Providing social platform features (sharing, interaction, messaging)',
            'Personalizing user experience',
            'Generating AI-powered recommendations',
            'Security and abuse prevention',
            'Technical analysis and system improvement',
          ],
        },
      ],
    },
    {
      title: '4. Categories of Personal Data Processed',
      blocks: [
        {
          type: 'p',
          text: 'Within the scope of data described in the Privacy Policy, the following categories are processed:',
        },
        {
          type: 'ul',
          items: [
            'Identity and contact information',
            'Profile and account information',
            'Location data',
            'User content (posts, comments, messages, plans)',
            'Technical usage data',
            'Transaction and subscription information',
          ],
        },
      ],
    },
    {
      title: '5. Transfer of Personal Data',
      blocks: [
        {
          type: 'p',
          text: 'Your personal data may be transferred to the following parties under KVKK and with appropriate security measures in place:',
        },
        {
          type: 'ul',
          items: [
            'Cloud and server service providers',
            'Artificial intelligence and infrastructure service providers',
            'Analytics and performance tools',
            'Authorized public institutions and organizations',
          ],
        },
        {
          type: 'p',
          text: 'Your data will never be sold.',
        },
      ],
    },
    {
      title: '6. Cross-Border Data Transfer',
      blocks: [
        {
          type: 'p',
          text: 'For the purpose of providing Pathera services, your personal data may be processed and stored on servers located abroad, subject to appropriate security measures.',
        },
      ],
    },
    {
      title: '7. Rights of the Data Subject',
      blocks: [
        {
          type: 'p',
          text: 'Under Article 11 of KVKK, users have the following rights:',
        },
        {
          type: 'ul',
          items: [
            'To learn whether personal data is being processed',
            'To request information regarding processed data',
            'To learn whether data is used in accordance with its purpose',
            'To request correction of inaccurate or incomplete data',
            'To request deletion or destruction of data',
            'To object to processing',
          ],
        },
      ],
    },
    {
      title: '8. How to Submit a Request',
      blocks: [
        {
          type: 'p',
          text: 'For requests under KVKK, you may send an email to business@pathera.net.',
        },
        {
          type: 'p',
          text: 'Your requests will be responded to as soon as possible and within the statutory time limits at the latest.',
        },
      ],
    },
    {
      title: '9. Effective Date',
      blocks: [
        {
          type: 'p',
          text: 'This KVKK Disclosure Notice enters into force on the date of publication and may be updated as necessary.',
        },
      ],
    },
  ],
  contact: {
    title: 'Contact',
    lead: 'For KVKK applications and inquiries:',
    email: 'business@pathera.net',
    web: 'pathera.net',
    webUrl: 'https://pathera.net',
  },
};
