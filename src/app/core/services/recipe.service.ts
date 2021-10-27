import { Injectable } from '@angular/core'
import { Recipe } from 'app/components/recipe-list/recipe.model'
import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from 'environments/environment'

const BACKEND_URL = environment.apiUrl

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private recipes: Recipe[] = []
    // private recipe: Recipe = {}
    private recipesUpdated = new Subject<Recipe[]>()
    private search = new Subject<string>()

    constructor(private http: HttpClient) {}

    getRecipes() {
        this.http
            .get<Recipe[]>(`${BACKEND_URL}/recipes`)
            .subscribe((recipes) => {
                this.recipes = recipes
                this.recipesUpdated.next([...this.recipes])
            })
    }

    getRecipesListener() {
        return this.recipesUpdated.asObservable()
    }

    getLength() {
        return this.recipes.length
    }

    setSearch(search: string) {
        this.search.next(search)
    }

    getSearchListener() {
        return this.search.asObservable()
    }

    getRecipeBySlug(_slug: string) {
        return this.http
            .get<Recipe>(`${BACKEND_URL}/recipes/${_slug}`)
            .toPromise()
    }
}
