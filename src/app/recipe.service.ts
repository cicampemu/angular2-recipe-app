import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()

export class RecipeService {
	private _url: string = "http://PathToYourServer/apidata/recipedata.json"
	constructor(private _http: Http){}
	getRecipes() {
		return this._http.get(this._url)
			.map((response : Response) => response.json())
	}
}