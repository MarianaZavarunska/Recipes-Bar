import { IRecipe } from "./recipe.interface"

export interface IResponse {
  status: string,
  results?: number,
  data: {
    recipes: IRecipe[]
  }
}

export interface IRecipeResponse {
  status: string,
  results?: number,
  data: {
    recipe: IRecipe
  }
}
