export interface IRecipe {
  id: string,
  title: string,
  publisher: string,
  image_url: string,
  ingredients: IIngredient[],
  source_url: string,
  servings: number,
  cooking_time: number,
}

export interface IIngredient {
  quantity: number,
  unit: string,
  description: string,
}
