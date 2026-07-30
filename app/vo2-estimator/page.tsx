import type { Metadata } from 'next';
import VO2Client from './VO2Client';

export const metadata: Metadata = {
  title: "FreeVO2 Max Estimator | Free Cardiovascular Fitness Calculator",
  description: "Estimate your VO2 Max with this free calculator. Track cardiovascular fitness, a key predictor of longevity and overall health.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/vo2-estimator",
  },
};

export default function VO2EstimatorPage() {
  return <VO2Client />;
}