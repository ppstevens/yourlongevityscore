export default function SupplementGuide() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tighter text-center mb-4">The Science Behind the Supplements</h1>
        <p className="text-center text-xl text-gray-600 mb-16">Evidence-based guide to the most researched longevity supplements in 2026</p>

        {/* Top Tier Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Top Tier Supplements (Strong Evidence)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-3xl shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-6 font-semibold">Supplement</th>
                  <th className="text-left p-6 font-semibold">Key Benefits</th>
                  <th className="text-left p-6 font-semibold">Typical Dose</th>
                  <th className="text-left p-6 font-semibold">Evidence Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-6 font-medium">NMN / NR (NAD+)</td>
                  <td className="p-6 text-gray-600">Cellular energy, DNA repair, mitochondrial function</td>
                  <td className="p-6">500–1000mg daily</td>
                  <td className="p-6 text-emerald-600 font-medium">Strong</td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">Creatine Monohydrate</td>
                  <td className="p-6 text-gray-600">Muscle, brain function, cellular energy</td>
                  <td className="p-6">5g daily</td>
                  <td className="p-6 text-emerald-600 font-medium">Very Strong</td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">Omega-3 (EPA/DHA)</td>
                  <td className="p-6 text-gray-600">Inflammation, heart, brain health</td>
                  <td className="p-6">1–2g daily</td>
                  <td className="p-6 text-emerald-600 font-medium">Strong</td>
                </tr>
                <tr className="border-b">
                  <td className="p-6 font-medium">Vitamin D3 + K2</td>
                  <td className="p-6 text-gray-600">Immunity, bone health, inflammation</td>
                  <td className="p-6">2000–4000 IU</td>
                  <td className="p-6 text-emerald-600 font-medium">Strong</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium">Resveratrol</td>
                  <td className="p-6 text-gray-600">Sirtuin activation, cardiovascular health</td>
                  <td className="p-6">500–1000mg</td>
                  <td className="p-6 text-emerald-600 font-medium">Moderate-Strong</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Second Tier */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-center">Second Tier (Promising)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl">
              <h3 className="font-semibold text-xl mb-3">Fisetin</h3>
              <p className="text-gray-600">Powerful senolytic that clears senescent (old) cells. Promising for reducing inflammation and improving tissue function.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <h3 className="font-semibold text-xl mb-3">Quercetin</h3>
              <p className="text-gray-600">Antioxidant and senolytic. Often paired with fisetin for better results.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <h3 className="font-semibold text-xl mb-3">Spermidine</h3>
              <p className="text-gray-600">Induces autophagy (cellular cleanup). Linked to improved lifespan in multiple studies.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl">
              <h3 className="font-semibold text-xl mb-3">Taurine</h3>
              <p className="text-gray-600">Supports mitochondrial function and reduces oxidative stress.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="/" className="inline-block bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-green-700 transition">
            ← Back to Longevity Score Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}