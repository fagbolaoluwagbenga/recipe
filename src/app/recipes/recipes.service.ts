import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gbegiri',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/logo-234-675605.png',
      ingredients: ['yam', 'snail', 'palmoil', 'beef']
    },
    {
      id: 'r2',
      title: 'Moi Moi',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-512/logo-234-675605.png',
      ingredients: ['beans', 'pepper', 'egg', 'beef']
    },
  ]
  constructor() { }

  
  getAllRecipes(){
    return [...this.recipes]
   }
 
   getRecipe(recipeId: string){
     return {
       ...this.recipes.find(recipe => {
       return recipe.id === recipeId;
     })
   };
   }

   deleteRecipe(recipeId: string) {
     this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
     });
   }
   
}
