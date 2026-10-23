import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Your Longevity Score',
  description: 'Learn how the free Longevity Score and biological age calculator works, who it is for, and the educational purpose of the site.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          About Your Longevity Score
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your Longevity Score is a free educational tool that estimates a simple longevity score and biological age based on lifestyle and fitness inputs that research commonly links to healthier aging.
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2>What This Site Is For</h2>
          <p>
            The goal is to help people understand how sleep, exercise, nutrition quality, cardiovascular fitness (VO2 max), and resting heart rate can influence how well the body is aging relative to chronological age. The calculator is designed as a starting point for learning, not as a medical test.
          </p>

          <h2>How the Calculator Works</h2>
          <p>
            Users enter a few basic details: age, typical sleep hours, weekly exercise days, nutrition style, estimated VO2 max, and resting heart rate. The tool applies a transparent scoring approach based on generally accepted ranges for these factors. The result shows a Longevity Score, an estimated biological age, and practical suggestions for exercise, meals, and evidence-based supplements.
          </p>
          <p>
            These outputs are estimates only. They are not a diagnosis, not a clinical biological age test (such as an epigenetic clock), and not a replacement for bloodwork, a physical exam, or advice from a doctor.
          </p>

          <h2>Educational Content</h2>
          <p>
            In addition to the calculator, the site includes guides on improving VO2 max, sleep habits that support a lower biological age, protein and muscle maintenance, and the science behind common longevity supplements. These articles exist to give context beyond the score itself.
          </p>

          <h2>Affiliate Products</h2>
          <p>
            Some pages may contain affiliate links to products related to recovery, nutrition, or longevity. If you purchase through those links, the site may earn a commission at no extra cost to you. Product mentions are chosen for relevance to the topics covered; they are not medical recommendations.
          </p>

          <h2>Important Medical Disclaimer</h2>
          <p>
            Everything on this site is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider before making changes to exercise, diet, or supplements, especially if you have a medical condition.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-green-700 transition"
          >
            ← Back to Longevity Score Calculator
          </a>
        </div>
      </div>
    </div>
  );
}