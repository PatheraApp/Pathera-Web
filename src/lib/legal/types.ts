export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export type LegalSubsection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
  subsections?: LegalSubsection[];
};

export type LegalContact = {
  title: string;
  lead: string;
  email: string;
  web: string;
  webUrl: string;
};

export type LegalDocument = {
  intro: string[];
  sections: LegalSection[];
  contact: LegalContact;
};
