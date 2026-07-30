import type { Metadata } from 'next';
import TipClient from './TipClient';

export const metadata: Metadata = {
  title: "Daily Longevity Tips | Practical Habits for Healthy Aging",
  description: "Get practical, science-backed daily longevity tips to improve sleep, exercise, nutrition, and overall healthspan.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/learn/tip",
  },
};

export default function TipPage() {
  return <TipClient />;
}