export * from './upload';

export interface Project {
  title: string;
  description: string;
  href: string;
  imagePath: string;
  year: string;
  variant?: 'default' | 'primary';
  buttonText?: 'Read essay' | 'View samples' | 'Get in touch';
}