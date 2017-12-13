export class NutritionFacts {
    productName: string;
    image: string;
    servingSize: number;
    calories: number;
    saturatedFat: number;
    transFat: number;
    cholesterol: number;
    sodium: number;
    dietaryFiber: number;
    totalSugars: number;
    protein: number;
    vitaminA: number;
    vitaminC: number;
    calcium: number;
    iron: number;

    constructor(
        productName: string,
        image: string,
        servingSize: number,
        calories: number,
        saturatedFat: number,
        transFat: number,
        cholesterol: number,
        sodium: number,
        dietaryFiber: number,
        totalSugars: number,
        protein: number,
        vitaminA: number,
        vitaminC: number,
        calcium: number,
        iron: number) {
            this.productName = productName;
            this.image = image;
            this.servingSize = servingSize;
            this.calories = calories;
            this.saturatedFat = saturatedFat;
            this.transFat = transFat;
            this.cholesterol = cholesterol;
            this.sodium = sodium;
            this.image = image;
            this.dietaryFiber = dietaryFiber;
            this.totalSugars = totalSugars;
            this.protein = protein;
            this.vitaminA = vitaminA;
            this.vitaminC = vitaminC;
            this.calcium = calcium;
            this.iron = iron;
    }
}
