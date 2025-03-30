export interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string;
}

export interface Category {
  id: string;
  name: string;
  active: boolean;
} 