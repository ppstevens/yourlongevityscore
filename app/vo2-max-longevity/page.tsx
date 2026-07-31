import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VO2 Max and Longevity | Why Cardiovascular Fitness Predicts Healthy Aging",
  description: "Learn why VO2 Max is one of the strongest predictors of longevity. Discover how to measure and improve your cardiovascular fitness for better biological age and healthspan.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/vo2-max-longevity",
  },
};

export default function VO2MaxLongevityPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-6">
          VO2 Max and Longevity
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          VO2 Max is one of the most powerful and well-researched predictors of long-term health and lifespan. 
          Higher cardiovascular fitness is consistently linked to lower risk of chronic disease and slower biological aging.
        </p>

        {/* What is VO2 Max */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">What Is VO2 Max?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            VO2 Max measures the maximum amount of oxygen your body can use during intense exercise. 
            It reflects how efficiently your heart, lungs, and muscles work together to deliver and utilize oxygen.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A higher VO2 Max generally indicates better cardiovascular fitness and greater capacity for physical work. 
            It is often expressed in milliliters of oxygen per kilogram of body weight per minute (mL/kg/min).
          </p>
        </section>

        {/* Why It Matters for Longevity */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Why VO2 Max Matters for Longevity</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Large studies have shown that cardiorespiratory fitness is a stronger predictor of mortality risk 
            than many traditional risk factors. People with higher VO2 Max levels tend to have:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Lower risk of cardiovascular disease</li>
            <li>Better metabolic health</li>
            <li>Greater resilience to illness and injury</li>
            <li>Improved cognitive function with age</li>
            <li>Longer healthspan (years lived in good health)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Even modest improvements in VO2 Max are associated with meaningful reductions in all-cause mortality.
          </p>
        </section>

        {/* How to Improve VO2 Max */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">How to Improve Your VO2 Max</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The good news is that VO2 Max is highly trainable at almost any age. Effective strategies include:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-3">
            <li>
              <strong>Zone 2 Training:</strong> Steady aerobic work at a conversational pace for 30–60 minutes, 
              2–4 times per week. This builds mitochondrial density and aerobic base.
            </li>
            <li>
              <strong>High-Intensity Intervals:</strong> Short bursts of hard effort (e.g., 1–4 minutes) followed 
              by recovery. These sessions drive rapid improvements in oxygen uptake.
            </li>
            <li>
              <strong>Consistent Progression:</strong> Gradually increase duration or intensity over weeks rather 
              than making large jumps that risk injury or burnout.
            </li>
            <li>
              <strong>Strength Training:</strong> Supporting muscle mass and power helps overall performance and 
              metabolic health, which complements aerobic fitness.
            </li>
          </ul>
        </section>

        {/* Measuring VO2 Max */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">How to Measure VO2 Max</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Laboratory testing with a metabolic cart is the gold standard, but field tests and wearable estimates 
            can provide useful tracking data. Common approaches include:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Cooper 12-minute run/walk test</li>
            <li>Rockport walking test</li>
            <li>Estimates from fitness watches and chest straps</li>
            <li>Our free VO2 Max Estimator tool</li>
          </ul>
        </section>

        {/* Connection to Biological Age */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">VO2 Max and Biological Age</h2>
          <p className="text-gray-600 leading-relaxed">
            Because VO2 Max declines with age if left untrained, maintaining or improving it can help keep your 
            biological age lower than your chronological age. It is one of the key inputs in our Longevity Score 
            Calculator for this reason.
          </p>
        </section>

        {/* Call to Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <a href="/vo2-estimator" className="block bg-white border border-green-100 rounded-3xl p-8 hover:border-green-300 transition text-center">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-xl font-semibold mb-2">Estimate Your VO2 Max</h3>
            <p className="text-gray-600 text-sm">Use our free estimator based on distance and time.</p>
          </a>
          <a href="/" className="block bg-white border border-green-100 rounded-3xl p-8 hover:border-green-300 transition text-center">
            <div className="text-3xl mb-3">🧬</div>
            <h3 className="text-xl font-semibold mb-2">Calculate Longevity Score</h3>
            <p className="text-gray-600 text-sm">See how VO2 Max affects your overall biological age.</p>
          </a>
        </div>

        <div className="text-center">
          <a
            href="/"
            className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-2xl hover:bg-gray-50 transition"
          >
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}