import type { Metadata } from 'next';
import SupplementClient from './SupplementClient';

export const metadata: Metadata = {
  title: "Supplement Spotlight | Evidence-Based Longevity Supplements",
  description: "Explore evidence-based longevity supplements and the science behind NAD+, creatine, resveratrol, and other popular compounds.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/learn/supplement",
  },
};

export default function SupplementPage() {
  return <SupplementClient />;
}