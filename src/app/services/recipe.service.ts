import { RECIPES } from './../mocks/recipes.mock';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipes.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes():Observable<Recipe[]>{
    return of (RECIPES)
  }
}
