import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { RecipeService } from '@core/services/recipe.service'
import { environment } from 'environments/environment'
import { Subscription } from 'rxjs'
import { Recipe } from './recipe.model'

const BACKEND_URL = environment.apiUrl

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    BACKEND_URL = BACKEND_URL
    private searchSub: Subscription = new Subscription()
    private recipeSub: Subscription = new Subscription()
    recipes: Recipe[] = []
    frecipes: Recipe[] = []
    constructor(private recipeService: RecipeService) {}

    ngOnInit(): void {
        this.recipeService.getRecipes()
        this.recipeSub = this.recipeService
            .getRecipesListener()
            .subscribe((recipes: Recipe[]) => {
                this.recipes = recipes
                this.frecipes = recipes
            })

        this.searchSub = this.recipeService
            .getSearchListener()
            .subscribe((search: string) => {
                this.filterRecipes(search)
            })
    }

    ngOnDestroy(): void {
        this.searchSub.unsubscribe()
        this.recipeSub.unsubscribe()
    }

    filterRecipes(search: string) {
        this.frecipes = this.recipes.filter(({ name }) =>
            name.toLowerCase().includes(search)
        )
    }

    getLengthFilteredRecipes() {
        return this.recipes.length
    }
}
