import type { Metadata } from 'next';
import MarketClient from './MarketClient';

export const metadata: Metadata = {
  title: "Longevity Supplements & Recovery Tools | NAD+, Cold Plunge & More",
  description: "Shop science-backed longevity supplements including NAD+, creatine, omega-3, cold plunge, infrared sauna, and red light therapy. Products selected to support healthy aging and performance.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/market",
  },
};

export default function MarketPage() {
  return <MarketClient />;
}