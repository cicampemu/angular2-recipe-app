import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
	recipes = [];
	errorMsg: string;

	constructor(private _recipeService: RecipeService) {}

	ngOnInit(){
		this._recipeService.getRecipes()
			.subscribe(resRecipeData => this.recipes = resRecipeData,
				  resRecipeError => this.errorMsg = resRecipeError)
	}
}
