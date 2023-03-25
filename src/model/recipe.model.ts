import { RecipeIngredientRel } from "./recipe-ingredient.rel.modal"

export interface Recipe {

  title: string
  description: string
  minutes: number
  isLiked: boolean

  ingredients: RecipeIngredientRel[]

}