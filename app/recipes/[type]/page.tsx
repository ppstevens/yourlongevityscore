'use client';

import { use } from 'react';

export default function RecipePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = use(params);   // ← This fixes the Promise error

  const recipes: any = {
    breakfast: { 
      name: "High-Protein Greek Yogurt Bowl", 
      time: "5 minutes", 
      ingredients: ["Greek yogurt", "Mixed berries", "Walnuts", "Chia seeds", "Cinnamon"],
      instructions: "Mix all ingredients in a bowl. Top with extra berries and a sprinkle of cinnamon for flavor." 
    },
    lunch: { 
      name: "Grilled Salmon & Spinach Salad", 
      time: "15 minutes", 
      ingredients: ["Salmon fillet", "Baby spinach", "Olive oil", "Lemon", "Avocado"],
      instructions: "Grill salmon 4-5 minutes per side. Toss spinach with olive oil and lemon juice. Top with salmon and sliced avocado." 
    },
    dinner: { 
      name: "Chicken Broccoli Stir Fry", 
      time: "20 minutes", 
      ingredients: ["Chicken breast", "Broccoli florets", "Garlic", "Ginger", "Tamari or soy sauce"],
      instructions: "Stir fry chicken until cooked. Add broccoli, garlic, and ginger. Finish with tamari sauce." 
    },
    snacks: { 
      name: "Cottage Cheese & Almonds", 
      time: "2 minutes", 
      ingredients: ["Cottage cheese", "Almonds", "Berries (optional)"],
      instructions: "Serve cottage cheese with a handful of almonds. Add fresh berries for natural sweetness if desired." 
    }
  };

  const recipe = recipes[type] || recipes.breakfast;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-green-600 hover:underline mb-8 inline-block">← Back to Dashboard</a>
        
        <h1 className="text-5xl font-bold mb-4">{recipe.name}</h1>
        <p className="text-xl text-gray-600 mb-12">Prep time: {recipe.time}</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Ingredients</h3>
            <ul className="space-y-3 text-lg">
              {recipe.ingredients.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-3">• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Instructions</h3>
            <p className="text-lg leading-relaxed text-gray-700">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}