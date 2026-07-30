'use client';

export default function MarketPage() {
  const products = [
    {
      id: 1,
      name: "NAD+ Booster (NMN or NR)",
      category: "Longevity",
      description: "Premium NAD+ precursor to support cellular energy, DNA repair, and healthy aging",
      image: "⚡",
      affiliateLink: "https://tidd.ly/4av2lNx",
    },
    {
      id: 2,
      name: "Resveratrol",
      category: "Longevity",
      description: "Activates sirtuins and supports cardiovascular health and longevity pathways",
      image: "🍇",
      affiliateLink: "https://tidd.ly/4av2lNx",
    },
    {
      id: 3,
      name: "Essential Amino Acids (EAA)",
      category: "Longevity",
      description: "Complete amino acid profile to support muscle maintenance, recovery, and longevity pathways",
      image: "🧬",
      affiliateLink: "https://www.bodyhealthaffiliates.com/8H5BJZL/3QQG7/",
    },
    {
      id: 4,
      name: "Creatine Monohydrate",
      category: "Supplements",
      description: "Supports muscle strength, brain function, and cellular energy production",
      image: "💪",
      affiliateLink: "https://dangercoffee.com/products/danger-creatine",
    },
    {
      id: 5,
      name: "Omega-3 Fish Oil (Triple Strength)",
      category: "Supplements",
      description: "High EPA/DHA for heart health and inflammation control",
      image: "🧴",
      affiliateLink: "https://www.bodyhealthaffiliates.com/8H5BJZL/3QQG7/",
    },
    {
      id: 6,
      name: "Vitamin D3 + K2",
      category: "Supplements",
      description: "Essential for bone health, immunity, and inflammation control",
      image: "☀️",
      affiliateLink: "https://shopsuppgradelabs.com/products/dake",
    },
    {
      id: 7,
      name: "Magnesium Glycinate",
      category: "Supplements",
      description: "Best absorbed form for sleep, muscle recovery, and nervous system health",
      image: "🌿",
      affiliateLink: "https://shopsuppgradelabs.com/products/magnesium-101",
    },
    {
      id: 8,
      name: "Blueprint Products by Bryan Johnson",
      category: "Longevity Protocol",
      description: "Premium longevity supplements and products from Bryan Johnson's Blueprint protocol",
      image: "🔬",
      affiliateLink: "https://blueprint.bryanjohnson.com/pages/referrals?t=4dfbe810e93a862153208d2a1d726b82ddc7b3c0",
    },
    {
      id: 9,
      name: "Cold Plunge Tub",
      category: "Recovery",
      description: "Ice bath therapy to reduce inflammation, boost recovery, and improve resilience",
      image: "❄️",
      affiliateLink: "https://renutherapy.pxf.io/c/7439929/3830807/48000",
    },
    {
      id: 10,
      name: "Sauna",
      category: "Recovery",
      description: "Full-spectrum infrared for detoxification, relaxation, and cardiovascular health",
      image: "🔥",
      affiliateLink: "https://renutherapy.pxf.io/c/7439929/3830807/48000",
    },
    {
      id: 11,
      name: "Red Light Therapy",
      category: "Recovery",
      description: "Professional-grade red & near-infrared light therapy for skin, recovery, and energy",
      image: "🌟",
      affiliateLink: "https://nuviorecovery.com/longevityscore50",
    },
    {
      id: 12,
      name: "Remineralized Coffee",
      category: "Daily Essentials",
      description: "Coffee with added minerals and longevity compounds for sustained energy without the crash",
      image: "☕",
      affiliateLink: "https://dangercoffee.com/collections/shop-all",
    }
    
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tighter text-gray-900">Longevity Market</h1>
          <p className="text-2xl text-gray-600 mt-6">Tools & Supplements Backed by Science</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-56 flex items-center justify-center text-8xl bg-linear-to-br from-slate-100 to-emerald-50">
                {product.image}
              </div>
              <div className="p-8">
                <div className="uppercase text-xs tracking-widest text-green-600 font-medium mb-2">{product.category}</div>
                <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-8 line-clamp-3">{product.description}</p>
                
                <div className="flex justify-end">
                  <a 
                    href={product.affiliateLink} 
                    target="_blank"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-2xl font-medium transition"
                  >
                    Shop Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-sm text-gray-500">
          This page contains affiliate links. We may earn a commission at no extra cost to you.<br />
          All products are chosen based on scientific research for longevity and health optimization.
        </div>

        <div className="mt-12 text-center">
          <a href="/" className="inline-block bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-green-700 transition">
            ← Back to Longevity Score Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}