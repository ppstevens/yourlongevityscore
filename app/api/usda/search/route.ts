import { NextRequest, NextResponse } from 'next/server';

const USDA_API_KEY = 'lIT79I0q73a3ly70guOBQhpTsH2FcVNf9ktsOu3N';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${USDA_API_KEY}&query=${encodeURIComponent(query)}&pageSize=5`
    );

    const data = await response.json();

    return NextResponse.json({
      foods: data.foods?.map((food: any) => ({
        name: food.description,
        calories: food.foodNutrients?.find((n: any) => n.nutrientName === "Energy")?.value || 0,
        protein: food.foodNutrients?.find((n: any) => n.nutrientName.includes("Protein"))?.value || 0,
        carbs: food.foodNutrients?.find((n: any) => n.nutrientName.includes("Carbohydrate"))?.value || 0,
        fat: food.foodNutrients?.find((n: any) => n.nutrientName.includes("Total lipid"))?.value || 0,
      })) || []
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch USDA data" }, { status: 500 });
  }
}