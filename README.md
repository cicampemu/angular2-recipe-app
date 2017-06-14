# angular2-recipe-app
Angular 2 web app to display list of recipes from external JSON.

The page lists recipes loaded from a JSON, via an Angular 2 service (RecipeService) using the Http module. To load your own JSON, change this variable in recipe.service.ts:

<code>private _url: string = "http://PathToYourServer/apidata/recipedata.json"</code>
