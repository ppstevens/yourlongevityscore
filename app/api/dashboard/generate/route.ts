import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const age = parseInt(searchParams.get('age') || '35');
  const sleepHours = parseFloat(searchParams.get('sleepHours') || '7.5');
  const exerciseDays = parseInt(searchParams.get('exerciseDays') || '4');
  const nutritionQuality = searchParams.get('nutritionQuality') || 'balanced';
  const vo2Max = parseFloat(searchParams.get('vo2Max') || '42');
  const restingHR = parseInt(searchParams.get('restingHR') || '65');

  // Longevity Score (0-100)
  let sleepScore = Math.min(28, Math.max(8, Math.round(8 + (sleepHours - 4) * 4)));
  let exerciseScore = Math.min(32, 4 + exerciseDays * 4);
  
  let nutritionScore = 24;
  if (nutritionQuality === 'high junk') nutritionScore = 4;
  else if (nutritionQuality === 'keto') nutritionScore = 24;
  else if (nutritionQuality === 'high protein') nutritionScore = 26;
  else if (nutritionQuality === 'high carb') nutritionScore = 18;

  let biomarkerScore = 12;
  if (vo2Max >= 55) biomarkerScore += 8;
  else if (vo2Max >= 45) biomarkerScore += 6;
  else if (vo2Max >= 35) biomarkerScore += 3;
  else biomarkerScore -= 5;

  if (age > 65) biomarkerScore -= 7;
  else if (age > 50) biomarkerScore -= 4;
  else if (age > 40) biomarkerScore -= 2;

  if (exerciseDays >= 5) biomarkerScore += 5;
  else if (exerciseDays >= 3) biomarkerScore += 3;

  biomarkerScore = Math.min(25, Math.max(5, Math.round(biomarkerScore)));

  const totalPoints = sleepScore + exerciseScore + nutritionScore + biomarkerScore;
  let longevityScore = Math.round((totalPoints / 113) * 100);
  longevityScore = Math.min(96, Math.max(35, longevityScore));

  // Biological Age Calculation (based on your rules)
  let bioAge = age;

  // Sleep
  if (sleepHours >= 8) bioAge -= Math.round((sleepHours - 7) * 1.2);
  else if (sleepHours < 7) bioAge += Math.round((7 - sleepHours) * 1.5);

  // Exercise
  if (exerciseDays >= 4) bioAge -= Math.round((exerciseDays - 3) * 1.8);
  else if (exerciseDays < 3) bioAge += Math.round((3 - exerciseDays) * 2.5);

  // Nutrition
  if (nutritionQuality === 'high protein' || nutritionQuality === 'balanced') bioAge -= 4;
  else if (nutritionQuality === 'keto') bioAge -= 3;
  else if (nutritionQuality === 'high carb') bioAge += 2;
  else if (nutritionQuality === 'high junk') bioAge += 7;

  // Resting Heart Rate
  if (restingHR > 85) bioAge += Math.round((restingHR - 85) * 0.4);
  else if (restingHR < 60) bioAge -= 3;

  // VO2 Max
  if (vo2Max < 40) bioAge += Math.round((40 - vo2Max) * 0.6);
  else if (vo2Max > 50) bioAge -= Math.round((vo2Max - 50) * 0.7);

  const biologicalAge = Math.max(18, Math.round(bioAge));

  return NextResponse.json({
    score: longevityScore,
    biologicalAge: biologicalAge,
    chronologicalAge: age,
    routines: exerciseDays >= 4 ? ["Zone 2 Cardio 4x/week", "Strength Training 3x/week"] : ["Zone 2 Cardio 3x/week", "Strength Training 2x/week"],
    meals: {
      breakfast: "High-protein meal aligned with your nutrition style",
      lunch: "Grilled protein + large vegetable salad",
      dinner: "Lean protein + broccoli or greens",
      snacks: "Nuts, cottage cheese or berries"
    },
    supplements: [
      { name: "Omega-3", dose: "1-2g daily", reason: "Anti-inflammatory" },
      { name: "Vitamin D3 + K2", dose: "2000-4000 IU", reason: "Bone & immune health" },
      { name: "Magnesium Glycinate", dose: "300-400mg", reason: "Sleep & recovery" }
    ],
    breakdown: {
      sleep: sleepScore,
      exercise: exerciseScore,
      nutrition: nutritionScore,
      biomarkers: biomarkerScore
    }
  });
}