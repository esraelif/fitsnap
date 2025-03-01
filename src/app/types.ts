import { recipes } from "./constants";

export interface BlogPost {
  title: string;
  author: string;
  content: string;
  body: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Recipe {
  name: string;
  ingredients: string;
  calories: number;
  time: string;
  instructions: string;
  image: string;
}

export type RecipeCategory = keyof typeof recipes;
