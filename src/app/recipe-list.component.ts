import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
	recipes = [];

	constructor(private _recipeService: RecipeService) {}

	ngOnInit(){
		this._recipeService.getRecipes()
			.subscribe(resRecipeData => this.recipes = resRecipeData)
	}
}
