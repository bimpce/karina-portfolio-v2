export interface ProjectImage {
  id: string;
  url: string;
  title: string;
  category: 'portraits' | 'moments' | 'details';
  location: string;
  year: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  date: string;
  message: string;
}
