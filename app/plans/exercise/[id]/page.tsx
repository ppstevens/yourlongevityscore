'use client';

import { use } from 'react';

export default function ExercisePlan({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);   // ← This fixes the error
  const planId = parseInt(id);

  const plans = [
    {
      title: "Zone 2 Cardio Plan",
      duration: "45-75 minutes per session",
      frequency: "4x per week",
      description: "Build your aerobic base and improve mitochondrial function.",
      exercises: [
        "Brisk Walking or Light Jogging",
        "Cycling at conversational pace",
        "Swimming",
        "Incline Treadmill Walking"
      ],
      tips: "Stay in Zone 2 (you can talk but not sing). This is the foundation of longevity training."
    },
    {
      title: "Strength Training Plan",
      duration: "45-60 minutes per session",
      frequency: "3x per week",
      description: "Maintain muscle mass and metabolic health.",
      exercises: [
        "Squats / Goblet Squats",
        "Deadlifts / Romanian Deadlifts",
        "Bench Press / Push-ups",
        "Rows / Pull-ups",
        "Overhead Press"
      ],
      tips: "Focus on proper form and progressive overload. Rest 48 hours between sessions."
    }
  ];

  const plan = plans[planId] || plans[0];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-green-600 hover:underline mb-8 inline-block">← Back to Dashboard</a>
        
        <h1 className="text-5xl font-bold mb-6">{plan.title}</h1>
        <p className="text-xl text-gray-600 mb-10">{plan.description}</p>

        <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
          <h3 className="text-2xl font-semibold mb-6">Exercises</h3>
          <ul className="space-y-4 text-lg">
            {plan.exercises.map((ex, i) => (
              <li key={i} className="flex items-start gap-4">• {ex}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">Pro Tips</h3>
          <p className="text-gray-700 leading-relaxed text-lg">{plan.tips}</p>
        </div>
      </div>
    </div>
  );
}