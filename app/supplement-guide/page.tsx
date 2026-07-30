import type { Metadata } from 'next';
import SupplementGuideClient from './SupplementGuideClient';

export const metadata: Metadata = {
  title: "Best Longevity Supplements 2026 | Science-Backed Guide",
  description: "Learn the science behind the most researched longevity supplements including NAD+, creatine, resveratrol, omega-3, and more.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/supplement-guide",
  },
};

export default function SupplementGuidePage() {
  return <SupplementGuideClient />;
}