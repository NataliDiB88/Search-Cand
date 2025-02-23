export interface Candidate {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  html_url: string;
  bio: string | null; 
}