import type { Metadata } from 'next';
import ResearchClient from './ResearchClient';

export const metadata: Metadata = {
  title: "Latest Longevity Research | New Studies on Aging & Healthspan",
  description: "Stay updated with the latest research on longevity, biological age, VO2 Max, and healthy aging from trusted scientific sources.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/learn/research",
  },
};

export default function ResearchPage() {
  return <ResearchClient />;
}