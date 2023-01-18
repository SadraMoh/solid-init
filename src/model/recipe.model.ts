import { Collection } from "pocketbase"

export interface Recipe extends Collection {

  title: string
  description: string
  minutes: number
  isLiked: boolean
  
  ingredients: string[]

}