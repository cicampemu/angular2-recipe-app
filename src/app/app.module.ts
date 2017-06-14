import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
