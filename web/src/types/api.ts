export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  image: {
    alternativeText: string;
    url: string;
  };
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText: string;
  };
};

export type SectionTechProps = {
  title: string;
  techIcons: Array<{
    id: number;
    title: string;
    icon: {
      url: string;
    };
  }>;
};

export type SectionConceptsProps = {
  title: string;
  concepts: Array<{ id: number; title: string }>;
};

export type SectionModulesProps = {
  title: string;
  modules: Array<{
    id: number;
    title: string;
    subtitle: string;
    description: string;
  }>;
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type PricingBoxProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallment: number;
  benefits: string;
  button: {
    label: string;
    url: string;
  };
};

export type SectionAboutUsProps = {
  title: string;
  authors: Array<{
    photo: {
      alternativeText: string;
      url: string;
    };
    name: string;
    role: string;
    socialLinks: Array<{
      title: string;
      url: string;
    }>;
    description: string;
  }>;
};

export type SectionReviewsProps = {
  title: string;
  reviews: Array<{
    name: string;
    text: string;
    photo: {
      url: string;
    };
  }>;
};

export type SectionFaqProps = {
  title: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
};

export type FooterProps = {
  text: string;
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  pricingBox: PricingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: SectionReviewsProps;
  sectionFaq: SectionFaqProps;
  footer: FooterProps;
};
