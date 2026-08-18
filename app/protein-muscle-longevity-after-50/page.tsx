import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Protein, Muscle, and Longevity After 50 | Practical Guide",
  description: "Learn why protein and muscle matter for longevity after 50. Practical guidance on protein targets, strength training, meals, and healthy aging.",
  alternates: {
    canonical: "https://www.yourlongevityscore.com/protein-muscle-longevity-after-50",
  },
};

export default function ProteinMuscleLongevityPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 mb-6">
          Protein, Muscle, and Longevity After 50
        </h1>

        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Muscle is one of the most important tissues for healthy aging. After 50, preserving strength
          and lean mass supports metabolism, mobility, resilience, and independence. Protein intake and
          strength training are two of the most practical tools available.
        </p>

        {/* Why muscle matters */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Why Muscle Matters for Longevity</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Starting in midlife, many adults gradually lose muscle if they are not actively training and
            eating enough protein. This process can reduce strength, lower metabolic rate, impair balance,
            and make everyday activities harder over time.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Maintaining muscle is linked with better mobility, higher functional capacity, improved glucose
            control, and greater resilience during illness or recovery periods.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You do not need bodybuilder levels of muscle. You need enough strength and lean mass to support
            an active, independent life for decades.
          </p>
        </section>

        {/* Protein role */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">The Role of Protein After 50</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Protein provides the amino acids your body uses to repair and maintain muscle. With age, the
            body often becomes less efficient at stimulating muscle protein synthesis, which means protein
            timing and total intake matter more than they did at 25.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A practical approach for many active adults is to include a meaningful protein source at each
            meal rather than back-loading nearly all protein at dinner.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Exact needs vary by body size, activity level, and health status. A commonly discussed range for
            active adults is roughly 1.6–2.2 grams of protein per kilogram of body weight per day, adjusted
            with guidance from your healthcare professional.
          </p>
        </section>

        {/* Practical targets */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Practical Protein Habits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Include protein at breakfast, lunch, and dinner</li>
            <li>Choose high-quality sources you enjoy and digest well</li>
            <li>Pair protein with strength training for better results</li>
            <li>Use simple defaults so you do not have to reinvent meals daily</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Strong everyday options include eggs, Greek yogurt, cottage cheese, fish, poultry, lean meat,
            tofu, tempeh, lentils, and protein smoothies when whole-food meals are inconvenient.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Consistency matters more than perfect tracking. If breakfast is usually low-protein, that is
            often the easiest place to improve first.
          </p>
        </section>

        {/* Strength training */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Strength Training: The Other Half of the Equation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Protein works best when paired with resistance training. Strength work signals your body to
            keep and build muscle.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Train major muscle groups 2–3 times per week</li>
            <li>Focus on squat/hip hinge, push, pull, carry, and core patterns</li>
            <li>Use loads you can control with good form</li>
            <li>Progress gradually over weeks</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            You can use free weights, machines, resistance bands, or bodyweight progressions. The best
            program is the one you can repeat consistently without injury.
          </p>
        </section>

        {/* Sample day */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Sample Higher-Protein Day</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li><strong>Breakfast:</strong> Eggs or Greek yogurt with fruit</li>
            <li><strong>Lunch:</strong> Chicken, fish, or tofu with a large salad or vegetables</li>
            <li><strong>Dinner:</strong> Lean protein with vegetables and an optional whole-food carb</li>
            <li><strong>Snack if needed:</strong> Cottage cheese, Greek yogurt, or a protein shake</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Keep meals satisfying and simple. Ultra-processed convenience foods can fit occasionally, but
            whole-food protein sources should be the foundation.
          </p>
        </section>

        {/* Tracking */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">How to Track Progress</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Strength improving on key lifts or movements</li>
            <li>Better energy and recovery from training</li>
            <li>More stable body composition over time</li>
            <li>Easier daily movement and confidence</li>
            <li>Improved Longevity Score on retesting</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Reassess every 4–8 weeks. Focus on trend lines, not day-to-day noise.
          </p>
        </section>

        {/* Safety */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">Important Considerations</h2>
          <p className="text-gray-600 leading-relaxed">
            Protein needs and training recommendations can vary with kidney disease, metabolic conditions,
            medications, and other health factors. Check with your physician before making major changes
            to diet or exercise, especially if you have existing medical concerns.
          </p>
        </section>

        {/* CTAs */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <a
            href="/"
            className="block bg-white border border-green-100 rounded-3xl p-8 hover:border-green-300 transition text-center"
          >
            <div className="text-3xl mb-3">🧬</div>
            <h3 className="text-xl font-semibold mb-2">Calculate Longevity Score</h3>
            <p className="text-gray-600 text-sm">See how nutrition and training habits affect your score.</p>
          </a>
          <a
            href="/improve-biological-age"
            className="block bg-white border border-green-100 rounded-3xl p-8 hover:border-green-300 transition text-center"
          >
            <div className="text-3xl mb-3">📘</div>
            <h3 className="text-xl font-semibold mb-2">Improve Biological Age</h3>
            <p className="text-gray-600 text-sm">Build a complete framework around protein, training, sleep, and recovery.</p>
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