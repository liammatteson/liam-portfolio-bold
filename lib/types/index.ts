export * from './upload';

export interface Project {
  title: string;
  description: string;
  href: string;
  imagePath: string;
  year: string;
  variant?: 'default' | 'primary';
  buttonText?: string;
  tags?: string[];
  category?: string;
  isHeader?: boolean;
  links?: {
    text: string;
    href: string;
    icon: string;
  }[];
}