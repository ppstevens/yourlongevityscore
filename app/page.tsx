'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LongevityDashboard() {
  const [formData, setFormData] = useState({
    age: 35,
    sleepHours: 7.5,
    exerciseDays: 4,
    nutritionQuality: "balanced",
    vo2Max: 42,
    restingHR: 65,
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [animatedScores, setAnimatedScores] = useState({ sleep: 0, exercise: 0, nutrition: 0, biomarkers: 0 });
  const [shared, setShared] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const params = new URLSearchParams(Object.entries(formData).map(([k, v]) => [k, String(v)]));
    const res = await fetch(`/api/dashboard/generate?${params}`);
    const data = await res.json();

    setResult(data);

    const target = {
      sleep: data.breakdown?.sleep || 20,
      exercise: data.breakdown?.exercise || 25,
      nutrition: data.breakdown?.nutrition || 22,
      biomarkers: data.breakdown?.biomarkers || 18
    };

    setAnimatedScores({ sleep: 0, exercise: 0, nutrition: 0, biomarkers: 0 });

    const interval = setInterval(() => {
      setAnimatedScores(prev => ({
        sleep: Math.min(target.sleep, prev.sleep + 2),
        exercise: Math.min(target.exercise, prev.exercise + 2),
        nutrition: Math.min(target.nutrition, prev.nutrition + 2),
        biomarkers: Math.min(target.biomarkers, prev.biomarkers + 2),
      }));
    }, 30);

    setTimeout(() => clearInterval(interval), 900);
    setLoading(false);
  };

  const shareResult = () => {
    navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Updated Larger Header */}
<div className="text-center mb-16">
  <div className="flex justify-center mb-8">
    <img 
      src="/logo.jpg" 
      alt="Your Longevity Score"
      width="500"
      height="250" 
      className="h-48 md:h56 lg:h-64 w-auto"
    />
  </div>
  
  <p className="text-3xl md:text-4xl text-gray-600 font-medium">Know Your Score. Extend Your Life.</p>
  
  <p className="text-xl md:text-2xl text-gray-500 mt-6 max-w-3xl mx-auto leading-relaxed">
    Discover your biological age and get personalized recommendations to optimize longevity, performance, and healthspan using science-backed metrics.
  </p>
  
  <div className="flex flex-wrap gap-4 justify-center mt-10">
  <a href="/vo2-estimator" className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-2xl transition">
    📈 VO2 Max Estimator
  </a>
  <a href="/market" className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-2xl transition">
    🛒 Longevity Market
  </a>
</div>
</div>

        {/* Top Ad */}
        <div className="my-8 bg-gray-100 border border-dashed border-gray-300 rounded-2xl h-24 flex items-center justify-center text-gray-400 text-sm">
          [728x90 Leaderboard Ad]
        </div>

        {!result ? (
          <div className="bg-white rounded-3xl shadow-2xl p-16">
            <form onSubmit={handleSubmit} className="space-y-8">
  <div>
    <label className="block text-lg font-medium mb-3">Your Age</label>
    <input type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: +e.target.value })} className="w-full text-4xl font-light text-center py-5 border border-gray-200 rounded-3xl focus:border-green-500 focus:ring-4 focus:ring-green-100" min="18" max="100" />
  </div>

  <div>
    <label className="block text-lg font-medium mb-3">Sleep per Night</label>
    <div className="flex items-center gap-4 bg-gray-50 rounded-3xl p-6">
      <input type="range" min="4" max="10" step="0.5" value={formData.sleepHours} onChange={(e) => setFormData({ ...formData, sleepHours: +e.target.value })} className="flex-1 accent-green-600" />
      <span className="text-4xl font-semibold w-20">{formData.sleepHours}h</span>
    </div>
  </div>

  <div>
    <label className="block text-lg font-medium mb-3">Exercise Days per Week</label>
    <div className="flex items-center gap-4 bg-gray-50 rounded-3xl p-6">
      <input type="range" min="0" max="7" value={formData.exerciseDays} onChange={(e) => setFormData({ ...formData, exerciseDays: +e.target.value })} className="flex-1 accent-green-600" />
      <span className="text-4xl font-semibold w-20">{formData.exerciseDays}</span>
    </div>
  </div>

  <div>
    <label className="block text-lg font-medium mb-3">Nutrition Style</label>
    <select value={formData.nutritionQuality} onChange={(e) => setFormData({ ...formData, nutritionQuality: e.target.value })} className="w-full text-lg py-5 px-6 border border-gray-200 rounded-3xl focus:border-green-500 focus:ring-4 focus:ring-green-100">
      <option value="high protein">High Protein</option>
      <option value="balanced">Balanced</option>
      <option value="high carb">High Carb</option>
      <option value="keto">Keto</option>
      <option value="high junk">High Junk Food</option>
    </select>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label className="block text-base font-medium mb-3">Estimated VO2 Max</label>
      <input type="number" value={formData.vo2Max} onChange={(e) => setFormData({ ...formData, vo2Max: +e.target.value })} className="w-full text-3xl font-light text-center py-5 border border-gray-200 rounded-3xl" />
    </div>
    <div>
      <label className="block text-base font-medium mb-3">Resting Heart Rate (bpm)</label>
      <input type="number" value={formData.restingHR} onChange={(e) => setFormData({ ...formData, restingHR: +e.target.value })} className="w-full text-3xl font-light text-center py-5 border border-gray-200 rounded-3xl" />
    </div>
  </div>

  <button type="submit" disabled={loading} className="w-full py-6 text-xl font-semibold bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-3xl hover:brightness-110 transition">
    {loading ? "Analyzing..." : "Calculate Your Longevity Score"}
  </button>
</form>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl p-16">
  {/* Two Circles Side by Side */}
  <div className="flex flex-col md:flex-row justify-center gap-12 mb-12">
    {/* Longevity Score Circle */}
    <div className="flex flex-col items-center">
      <div className="relative w-72 h-72">
        <div className="score-circle w-full h-full rounded-full flex items-center justify-center border-20 border-green-100 shadow-2xl" style={{ '--score': `${result.score}%` } as any}>
          <div className="text-center">
            <div className="text-7xl font-bold text-green-600">{result.score}</div>
            <p className="uppercase tracking-widest text-xs mt-2 text-gray-500">YOUR LONGEVITY SCORE</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">Overall Longevity Score</p>
    </div>

    {/* Biological Age Circle */}
    <div className="flex flex-col items-center">
      <div className="relative w-72 h-72">
        <div className="w-full h-full rounded-full flex items-center justify-center border-20 border-blue-100 shadow-2xl bg-white">
          <div className="text-center">
            <div className="text-7xl font-bold text-blue-600">{result.biologicalAge}</div>
            <p className="uppercase tracking-widest text-xs mt-2 text-gray-500">BIOLOGICAL AGE</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">Your Biological Age</p>
    </div>
  </div>

  {/* Age Comparison Bar */}
  <div className="max-w-2xl mx-auto mb-16">
  <h3 className="text-center font-semibold mb-6">Age Comparison</h3>
  <div className="bg-gray-100 rounded-3xl p-8">
    <div className="flex justify-between text-sm mb-3">
      <span>Chronological Age</span>
      <span className="font-mono font-semibold">{result.chronologicalAge}</span>
    </div>
    
    <div className="h-4 bg-gray-200 rounded-full overflow-hidden relative">
      <div 
        className="h-full rounded-full transition-all duration-1000"
        style={{ 
          width: `${Math.min(100, ((result.biologicalAge / result.chronologicalAge) * 100))}%`,
          background: result.chronologicalAge - result.biologicalAge >= 8 
            ? 'linear-gradient(to right, #10b981, #34d399)' 
            : result.chronologicalAge - result.biologicalAge >= 4 
            ? 'linear-gradient(to right, #14b8a6, #22d3ee)' 
            : result.chronologicalAge - result.biologicalAge >= 1 
            ? 'linear-gradient(to right, #3b82f6, #60a5fa)' 
            : 'linear-gradient(to right, #f59e0b, #fbbf24)'
        }}
      />
    </div>

    <div className="flex justify-between text-sm mt-3">
      <span>Biological Age</span>
      <span className="font-mono font-semibold text-blue-600">{result.biologicalAge}</span>
    </div>

    <p className="text-center text-sm font-medium mt-8" 
       style={{ color: result.chronologicalAge - result.biologicalAge >= 8 ? '#10b981' : 
                        result.chronologicalAge - result.biologicalAge >= 4 ? '#14b8a6' : 
                        result.chronologicalAge - result.biologicalAge >= 1 ? '#3b82f6' : '#f59e0b' }}>
      You are functioning <span className="font-semibold">{result.chronologicalAge - result.biologicalAge}</span> years younger than your chronological age.
    </p>
  </div>
</div>

            <div className="max-w-2xl mx-auto bg-green-50 border border-green-100 rounded-3xl p-10 mb-16 text-center">
              <h3 className="font-semibold text-2xl mb-4">What Your Results Mean</h3>
              <p className="text-gray-600">Your Longevity Score is out of 100 and is used only for scale of areas for improvement. Your Biological Age shows how old your body is functioning compared to your chronological age ({result.chronologicalAge}).</p>
            </div>

            {/* Share Button */}
            <div className="flex justify-center mb-8">
              <button onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }} className="px-8 py-3 border border-gray-300 rounded-2xl hover:bg-gray-50 flex items-center gap-2 text-sm font-medium">
                🔗 Share Your Results
              </button>
            </div>

            {/* Animated Breakdown */}
            <div className="space-y-12 mb-16">
              <h3 className="text-2xl font-semibold text-center mb-10">Category Breakdown</h3>
              {[
                { label: "Sleep", value: animatedScores.sleep, max: 28, color: "bg-emerald-500", desc: "Hours & consistency." },
                { label: "Exercise", value: animatedScores.exercise, max: 32, color: "bg-green-500", desc: "Frequency + type." },
                { label: "Nutrition", value: animatedScores.nutrition, max: 28, color: "bg-teal-500", desc: "Based on your style." },
                { label: "Biomarkers", value: animatedScores.biomarkers, max: 25, color: "bg-cyan-500", desc: "Age, VO2 Max & exercise frequency." }
              ].map((cat, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between font-medium">
                    <span>{cat.label}</span>
                    <span className="font-mono">{cat.value} / {cat.max}</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${cat.color} transition-all duration-1000 ease-out`} style={{ width: `${(cat.value / cat.max) * 100}%` }} />
                  </div>
                  <p className="text-sm text-gray-600">{cat.desc}</p>
                </div>
              ))}
            </div>

            {/* Exercise with Links */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6">Recommended Exercise Routine</h3>
              <div className="space-y-4">
                {result.routines?.map((r: string, i: number) => (
                  <a key={i} href={`/plans/exercise/${i}`} className="block p-6 bg-green-50 hover:bg-green-100 rounded-2xl text-lg transition group">
                    🏋️ {r} <span className="text-green-600 group-hover:underline">→ Detailed Plan</span>
                  </a>
                ))}
              </div>
            </div>

          {/* Personalized Meal Plan - USDA Powered */}
<div className="mb-16">
  <h3 className="text-2xl font-semibold mb-6">Your Personalized Meal Plan</h3>
  <p className="text-gray-600 mb-8">Real food suggestions with USDA nutrition data</p>
  
  <div className="grid md:grid-cols-2 gap-6">
    {[
      { type: "breakfast", emoji: "🌅", label: "Breakfast" },
      { type: "lunch", emoji: "☀️", label: "Lunch" },
      { type: "dinner", emoji: "🌙", label: "Dinner" },
      { type: "snacks", emoji: "🥜", label: "Snacks" }
    ].map((meal) => {
      const nutritionStyle = formData.nutritionQuality;
      let mealDescription = "";

      if (meal.type === "breakfast") {
        if (nutritionStyle === "high protein") mealDescription = "Scrambled eggs with spinach, turkey bacon, and avocado";
        else if (nutritionStyle === "keto") mealDescription = "Eggs with avocado, cheese, and smoked salmon";
        else if (nutritionStyle === "high carb") mealDescription = "Oatmeal with banana, berries, and almond butter";
        else mealDescription = "Greek yogurt with berries, nuts, and a boiled egg";
      } else if (meal.type === "lunch") {
        if (nutritionStyle === "high protein") mealDescription = "Grilled chicken breast, quinoa, and large mixed greens salad";
        else if (nutritionStyle === "keto") mealDescription = "Salmon salad with avocado, olive oil, and leafy greens";
        else mealDescription = "Turkey wrap with vegetables and brown rice";
      } else if (meal.type === "dinner") {
        if (nutritionStyle === "high protein") mealDescription = "Lean steak or salmon with broccoli and sweet potato";
        else if (nutritionStyle === "keto") mealDescription = "Grass-fed beef stir-fry with zucchini and cauliflower rice";
        else mealDescription = "Grilled fish with quinoa and roasted vegetables";
      } else {
        if (nutritionStyle === "high protein") mealDescription = "Greek yogurt or cottage cheese with almonds";
        else mealDescription = "Apple with almond butter or mixed nuts";
      }

      return (
        <div key={meal.type} className="bg-white border border-amber-100 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl">{meal.emoji}</div>
            <div>
              <div className="uppercase text-xs tracking-widest text-amber-600 font-medium">{meal.label}</div>
              <p className="font-medium text-lg">{mealDescription}</p>
            </div>
          </div>

          <button 
            onClick={async () => {
              try {
                const res = await fetch(`/api/usda/search?query=${encodeURIComponent(mealDescription.split(',')[0])}`);
                const data = await res.json();
                const food = data.foods?.[0];
                
                if (food) {
                  alert(`USDA Data for ${food.name}:\nCalories: ${food.calories} kcal\nProtein: ${food.protein}g\nCarbs: ${food.carbs}g\nFat: ${food.fat}g`);
                } else {
                  alert("No detailed data found for this meal.");
                }
              } catch (err) {
                alert("Could not load USDA data");
              }
            }}
            className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-medium transition"
          >
            Show USDA Nutrition Data
          </button>
        </div>
      );
    })}
  </div>
</div>

    {/* Supplements with Market Links */}
<div>
  <h3 className="text-2xl font-semibold mb-6">Evidence-Based Longevity Supplements</h3>
  <div className="space-y-6">
    {result.supplements?.map((s: any, i: number) => (
      <a key={i} href="/market" className="block p-6 border hover:border-green-200 rounded-2xl transition">
        <div className="font-semibold text-lg">{s.name}</div>
        <div className="text-green-600">{s.dose}</div>
        <div className="text-sm text-gray-600 mt-1">{s.reason} → Shop on Market</div>
      </a>
    ))}

    <a href="/market" className="block p-6 border border-amber-200 hover:border-amber-400 bg-amber-50 rounded-2xl transition group">
      <div className="font-semibold text-lg flex items-center gap-2">
        NAD+ (NMN or Nicotinamide Riboside)
        <span className="text-amber-600 text-sm font-normal group-hover:underline">→ Shop on Market</span>
      </div>
      <div className="text-green-600">500–1000mg daily</div>
      <div className="text-sm text-gray-600 mt-1">One of the most researched longevity molecules — boosts cellular energy, DNA repair, and mitochondrial function.</div>
    </a>

    <a href="/market" className="block p-6 border hover:border-green-200 rounded-2xl transition">
      <div className="font-semibold text-lg">Creatine Monohydrate</div>
      <div className="text-green-600">5g daily</div>
      <div className="text-sm text-gray-600 mt-1">Supports muscle strength, brain function, and cellular energy production</div>
    </a>

    <a href="/market" className="block p-6 border hover:border-green-200 rounded-2xl transition">
      <div className="font-semibold text-lg">Resveratrol</div>
      <div className="text-green-600">500–1000mg daily</div>
      <div className="text-sm text-gray-600 mt-1">Activates sirtuins and supports cardiovascular health</div>
    </a>

    <a href="/market" className="block p-6 border hover:border-green-200 rounded-2xl transition">
  <div className="font-semibold text-lg">Essential Amino Acids (EAA)</div>
  <div className="text-green-600">1–2 servings daily</div>
  <div className="text-sm text-gray-600 mt-1">Complete amino acid profile to support muscle maintenance, recovery, and longevity pathways → Shop on Market</div>
</a>
  </div>
  <div className="mt-10 text-center">
  <a 
    href="/supplement-guide" 
    className="inline-block bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-green-700 transition"
  >
    📖 The Science Behind the Supplements
  </a>
</div>
</div>    

      <button onClick={() => setResult(null)} className="mt-16 w-full py-6 border-2 border-gray-300 rounded-3xl hover:bg-gray-50 text-xl font-medium">
              Start New Assessment
            </button>
          </div>           
        )}

  {/* Learn More Section - Daily Fresh Content */}
<div className="mt-20">
  <h2 className="text-3xl font-semibold text-center mb-10">Daily Longevity Insights</h2>
  <div className="grid md:grid-cols-4 gap-6">
    <a href="/learn/tip" className="block p-8 bg-white rounded-3xl border hover:border-green-200 transition group">
      <div className="text-emerald-600 text-sm font-medium mb-3">DAILY TIP</div>
      <h3 className="font-semibold text-xl mb-3 group-hover:text-green-700">Today’s Longevity Tip</h3>
      <p className="text-sm text-gray-600">Practical, science-backed advice updated daily.</p>
    </a>
    <a href="/learn/research" className="block p-8 bg-white rounded-3xl border hover:border-green-200 transition group">
      <div className="text-emerald-600 text-sm font-medium mb-3">NEW RESEARCH</div>
      <h3 className="font-semibold text-xl mb-3 group-hover:text-green-700">Latest Longevity Studies</h3>
      <p className="text-sm text-gray-600">Key findings from PubMed &amp; major journals.</p>
    </a>
    <a href="/learn/supplement" className="block p-8 bg-white rounded-3xl border hover:border-green-200 transition group">
      <div className="text-emerald-600 text-sm font-medium mb-3">SUPPLEMENT SPOTLIGHT</div>
      <h3 className="font-semibold text-xl mb-3 group-hover:text-green-700">Best Evidence-Based Supplements</h3>
      <p className="text-sm text-gray-600">What actually works in 2026.</p>
    </a>
    <a href="https://lifespan.io/aging-education" target="_blank" className="block p-8 bg-white rounded-3xl border hover:border-green-200 transition group">
      <div className="text-emerald-600 text-sm font-medium mb-3">TOPICS</div>
      <h3 className="font-semibold text-xl mb-3 group-hover:text-green-700">Longevity Topics</h3>
      <p className="text-sm text-gray-600">Comprehensive guide to longevity topics from Lifespan.io</p>
    </a>
  </div>
</div>     

{/* Social Media Links */}
<div className="mt-20 border-t border-gray-100 pt-12">
  <div className="flex justify-center gap-8">
    <a href="https://facebook.com/yourlongevityscore" target="_blank" className="text-gray-600 hover:text-blue-600 transition">
      <span className="text-2xl">📘</span> Facebook
    </a>
    <a href="https://instagram.com/yourlongevityscore" target="_blank" className="text-gray-600 hover:text-pink-600 transition">
      <span className="text-2xl">📷</span> Instagram
    </a>
    <a href="https://x.com/longevityscore" target="_blank" className="text-gray-600 hover:text-black transition">
      <span className="text-2xl">𝕏</span> X
    </a>
  </div>
  <p className="text-center text-sm text-gray-500 mt-8">
    Follow for daily longevity tips and updates
  </p>
</div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-20 bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center text-sm text-amber-800">
          <strong>Important Medical Disclaimer:</strong> This tool is for educational purposes only. This uses generally accepted biomarkers and personal inputs to provide an estimate only. Not a substitute for professional medical advice. Always consult your doctor.
        </div>
      </div>
    </div>
  );
}