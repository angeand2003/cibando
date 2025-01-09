
import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipes.model';

@Component({
  selector: 'app-recipes',
  standalone: false,

  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
ricette: Recipe[]= [];

constructor(private RecipeService: RecipeService){
  this.RecipeService.getRecipes().subscribe({
    next: (res) => {
this.ricette = res;
    },
    error:(e) => console.error(e)
  })

}



}
