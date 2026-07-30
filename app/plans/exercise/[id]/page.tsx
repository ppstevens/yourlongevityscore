import type { Metadata } from 'next';
import ExerciseClient from './ExerciseClient';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  
  return {
    title: `Exercise Plan ${id} | Detailed Longevity Workout`,
    description: "Detailed exercise plan for improving longevity, VO2 Max, strength, and overall fitness.",
    alternates: {
      canonical: `https://www.yourlongevityscore.com/plans/exercise/${id}`,
    },
  };
}

export default async function ExercisePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ExerciseClient id={id} />;
}