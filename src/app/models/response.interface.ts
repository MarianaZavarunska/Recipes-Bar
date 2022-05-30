import { IRecipe } from "./recipe.interface"

export interface IResponse {
  status: string,
  results?: number,
  data: {
    recipes: IRecipe[]
  }
}
