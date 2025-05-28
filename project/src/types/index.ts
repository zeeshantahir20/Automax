export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  client: string;
  completionDate: string;
  created_at?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  features?: string[];
  created_at?: string;
} 