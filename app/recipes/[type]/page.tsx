import type { Metadata } from 'next';
import RecipeClient from './RecipeClient';

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const formattedType = type.charAt(0).toUpperCase() + type.slice(1);

  return {
    title: `${formattedType} Recipe | Longevity Meal Plan`,
    description: `Healthy ${type} recipe ideas designed to support longevity, muscle maintenance, and overall metabolic health.`,
    alternates: {
      canonical: `https://www.yourlongevityscore.com/recipes/${type}`,
    },
  };
}

export default async function RecipePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <RecipeClient type={type} />;
}