import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Improve Your Biological Age | Practical Longevity Guide",
  description: "Learn proven ways to lower your biological age through better sleep, exercise, nutrition, VO2 Max training, and recovery habits.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/improve-biological-age",
  },
};

export default function ImproveBiologicalAgePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-6">
          How to Improve Your Biological Age
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Your biological age reflects how well your body is aging compared to your chronological age. 
          The good news is that many of the factors that influence biological age are within your control. 
          Below are practical, evidence-based strategies you can start using today.
        </p>

        {/* Sleep */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">1. Prioritize High-Quality Sleep</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Consistent, high-quality sleep is one of the most powerful levers for healthier aging. 
            Aim for 7–9 hours per night and keep a regular sleep schedule, even on weekends.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Keep your bedroom cool, dark, and quiet</li>
            <li>Limit screens and bright light in the hour before bed</li>
            <li>Avoid large meals and caffeine late in the day</li>
          </ul>
        </section>

        {/* Exercise */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">2. Train Your VO2 Max and Build Strength</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cardiovascular fitness (VO2 Max) is strongly linked to longevity. Combining Zone 2 aerobic 
            training with regular strength training delivers some of the best results for biological age.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Perform Zone 2 cardio 2–4 times per week (conversational pace)</li>
            <li>Strength train major muscle groups 2–3 times per week</li>
            <li>Include some higher-intensity intervals occasionally</li>
          </ul>
        </section>

        {/* Nutrition */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">3. Focus on Protein and Whole Foods</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nutrition plays a major role in muscle maintenance, inflammation, and metabolic health. 
            Emphasize protein, fiber, and minimally processed foods.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Target adequate daily protein (generally 1.6–2.2g per kg of body weight for active adults)</li>
            <li>Fill most of your plate with vegetables, quality protein, and healthy fats</li>
            <li>Limit ultra-processed foods and excess added sugar</li>
          </ul>
        </section>

        {/* Recovery */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">4. Manage Stress and Support Recovery</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Chronic stress and poor recovery can accelerate biological aging. Build simple recovery 
            habits into your weekly routine.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Take short daily walks, especially outdoors</li>
            <li>Practice basic breathing or mindfulness exercises</li>
            <li>Allow rest days between intense training sessions</li>
          </ul>
        </section>

        {/* Tracking */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">5. Track Progress Over Time</h2>
          <p className="text-gray-600 leading-relaxed">
            Reassess your longevity score and key metrics every 4–8 weeks. Small, consistent improvements 
            in sleep, fitness, and nutrition tend to compound into meaningful changes in biological age 
            over months and years.
          </p>
        </section>

        <div className="bg-green-50 border border-green-100 rounded-3xl p-8 text-center mb-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to measure your current biological age?
          </p>
          <a
            href="/"
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-green-700 transition"
          >
            Calculate Your Longevity Score
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