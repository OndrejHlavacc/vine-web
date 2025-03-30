export interface Wine {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: 'red' | 'white' | 'rose';
  year: number;
  region: string;
}