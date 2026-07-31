import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Longevity Supplements 2026 | Science-Backed Guide",
  description: "Evidence-based guide to the most researched longevity supplements including NAD+ (NMN/NR), creatine, resveratrol, omega-3, vitamin D3+K2, and more.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/supplement-guide",
  },
};

export default function SupplementGuidePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-6">
          The Science Behind Longevity Supplements
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Not all supplements are equal. Below is a clear, evidence-based overview of the compounds 
          with the strongest research support for healthy aging, cellular energy, and longevity pathways.
        </p>

        {/* Top Tier Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Top Tier – Strongest Evidence</h2>

          {/* NAD+ */}
          <div className="bg-white rounded-3xl p-8 mb-8 border">
            <h3 className="text-2xl font-semibold mb-3">NAD+ Precursors (NMN & Nicotinamide Riboside)</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              NAD+ levels decline significantly with age. This molecule is essential for cellular energy 
              production, DNA repair, and the activity of sirtuins (proteins linked to longevity). 
              NMN and NR are the two most studied precursors that help raise NAD+ levels.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong>Typical dose:</strong> 500–1000 mg daily
            </p>
            <p className="text-sm text-gray-500">
              Research support: Multiple human trials showing improvements in blood NAD+ levels, 
              insulin sensitivity, and markers of muscle function.
            </p>
          </div>

          {/* Creatine */}
          <div className="bg-white rounded-3xl p-8 mb-8 border">
            <h3 className="text-2xl font-semibold mb-3">Creatine Monohydrate</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Best known for muscle performance, creatine also supports brain energy metabolism and 
              may help preserve muscle mass with age — a critical factor in longevity. It is one of 
              the most researched and safest supplements available.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong>Typical dose:</strong> 5 g daily
            </p>
            <p className="text-sm text-gray-500">
              Research support: Decades of studies on strength, cognition, and safety.
            </p>
          </div>

          {/* Omega-3 */}
          <div className="bg-white rounded-3xl p-8 mb-8 border">
            <h3 className="text-2xl font-semibold mb-3">Omega-3 Fatty Acids (EPA & DHA)</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Omega-3s help resolve inflammation, support heart and brain health, and are associated 
              with healthier aging. Higher blood levels of EPA and DHA correlate with lower mortality 
              risk in large population studies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong>Typical dose:</strong> 1–2 g combined EPA + DHA daily
            </p>
            <p className="text-sm text-gray-500">
              Research support: Strong evidence for cardiovascular and anti-inflammatory benefits.
            </p>
          </div>

          {/* Vitamin D3 + K2 */}
          <div className="bg-white rounded-3xl p-8 mb-8 border">
            <h3 className="text-2xl font-semibold mb-3">Vitamin D3 + K2</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vitamin D deficiency is extremely common and linked to weaker immunity, poorer bone health, 
              and higher inflammation. Pairing D3 with K2 helps direct calcium to bones rather than arteries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong>Typical dose:</strong> 2000–4000 IU D3 + 100–200 mcg K2 daily
            </p>
            <p className="text-sm text-gray-500">
              Research support: Extensive data on bone, immune, and metabolic health.
            </p>
          </div>

          {/* Resveratrol */}
          <div className="bg-white rounded-3xl p-8 mb-8 border">
            <h3 className="text-2xl font-semibold mb-3">Resveratrol</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Resveratrol activates sirtuins and has been studied for its potential cardiovascular and 
              metabolic benefits. While results in humans are mixed, it remains one of the most discussed 
              longevity compounds.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              <strong>Typical dose:</strong> 500–1000 mg daily
            </p>
            <p className="text-sm text-gray-500">
              Research support: Moderate — strong in animal models, more limited in human trials.
            </p>
          </div>
        </section>

        {/* Second Tier */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Second Tier – Promising Compounds</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border">
              <h3 className="text-xl font-semibold mb-2">Fisetin</h3>
              <p className="text-gray-600 text-sm">
                A natural senolytic that may help clear senescent cells. Often taken in short courses 
                rather than daily.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border">
              <h3 className="text-xl font-semibold mb-2">Quercetin</h3>
              <p className="text-gray-600 text-sm">
                Antioxidant and senolytic often stacked with fisetin. Supports healthy inflammatory response.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border">
              <h3 className="text-xl font-semibold mb-2">Spermidine</h3>
              <p className="text-gray-600 text-sm">
                Induces autophagy (cellular cleanup). Linked to improved markers of aging in early research.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 border">
              <h3 className="text-xl font-semibold mb-2">Taurine</h3>
              <p className="text-gray-600 text-sm">
                Supports mitochondrial function and has shown lifespan benefits in animal studies.
              </p>
            </div>
          </div>
        </section>

        {/* Important Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 mb-16">
          <h3 className="font-semibold text-lg mb-3">Important Note</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Supplements are not a substitute for the fundamentals: sleep, exercise, nutrition, and stress 
            management. Always consult a healthcare professional before starting any new supplement, 
            especially if you take medications or have existing health conditions.
          </p>
        </div>

        <div className="text-center space-y-4">
          <a
            href="/market"
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-green-700 transition"
          >
            Shop Longevity Supplements →
          </a>
          <div>
            <a
              href="/"
              className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-2xl hover:bg-gray-50 transition"
            >
              ← Back to Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}