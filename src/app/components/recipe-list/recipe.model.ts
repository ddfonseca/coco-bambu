export interface Recipe {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  ingredients: string[];
  steps: string[];
  time: number;
  pictures: {
    thumb: string;
    hero: string;
  };
  finished?: boolean;
}
