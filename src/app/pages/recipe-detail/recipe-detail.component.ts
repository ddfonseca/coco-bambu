import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { RecipeService } from '@core/services/recipe.service'
import { Recipe } from 'app/components/recipe-list/recipe.model'
import { environment } from 'environments/environment'

interface SelectedItems {
    id: string
    selected: boolean
}

enum Choice {
    ingredient,
    step
}

const BACKEND_URL = environment.apiUrl

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    BACKEND_URL = BACKEND_URL
    recipe: Recipe
    selectedIngredients: SelectedItems[] = []
    selectedSteps: SelectedItems[] = []
    checkedIngredients = false
    checkedSteps = false
    showButton = true
    timeReference = new Date()
    interval
    minutes = 0
    seconds = 0
    showModal = false
    status = 0
    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute
    ) {}

    async ngOnInit() {
        this.recipeService.getRecipes()
        const slug = this.route.snapshot.params.slug
        this.recipe = await this.recipeService.getRecipeBySlug(slug)
        this.recipe = {
            ...this.recipe,
            time: this.recipe.time / 60000
        }
        this.selectedIngredients = this.fillArray(
            this.recipe.ingredients.length
        )
        this.selectedSteps = this.fillArray(this.recipe.steps.length)
    }

    private fillArray(length: number) {
        return Array(length)
            .fill({ idx: '0', selected: false })
            .map((_, idx) => ({ id: String(idx), selected: false }))
    }

    onChangeItems($event) {
        const id = $event.target.value
        const isChecked = $event.target.checked
        let findItem
        if ($event.target.id.includes('ingredient')) {
            findItem = this.selectedIngredients.find((item) => item.id === id)
            findItem.selected = isChecked
            this.checkedIngredients = this.verifyAllItems(Choice.ingredient)
        } else {
            findItem = this.selectedSteps.find((item) => item.id === id)
            findItem.selected = isChecked
            this.status = this.onChangeStatus(this.selectedSteps)
            this.checkedSteps = this.verifyAllItems(Choice.step)
        }
    }

    private onChangeStatus(items: SelectedItems[]) {
        const total = items.reduce((acc, item) => {
            if (item.selected) {
                acc++
            }
            return acc
        }, 0)
        return Math.round((total / items.length) * 100)
    }

    verifyAllItems(choice: Choice): boolean {
        switch (choice) {
            case Choice.ingredient:
                return this.selectedIngredients.every(
                    (item) => item.selected === true
                )
            case Choice.step:
                return this.selectedSteps.every(
                    (item) => item.selected === true
                )
            default:
                return false
        }
    }

    startTime(): void {
        this.timeReference = new Date()
        this.interval = setInterval(this.updateTime, 1000)
        this.showButton = !this.showButton
    }

    updateTime = (): void => {
        const currentTime = new Date()

        const difference = currentTime.getTime() - this.timeReference.getTime() // miliseconds
        this.minutes = Math.floor(difference / 1000 / 60) % 60
        this.seconds = Math.floor(difference / 1000) % 60
    }

    endTime = (): void => {
        clearInterval(this.interval)
        this.showModal = true
    }

    onModalChanged(showModal): void {
        this.showModal = showModal
    }
}
