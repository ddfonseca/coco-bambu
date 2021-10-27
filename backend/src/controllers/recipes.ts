import { Controller, Get } from '@overnightjs/core'
import { Recipe } from '../models/recipe.model'
import { Request, Response } from 'express'

@Controller('recipes')
export class RecipeController {
    @Get()
    public async getRecipes(_: Request, res: Response): Promise<void> {
        res.send(await Recipe.find())
    }

    @Get(':slug')
    public async getRecipeBySlug(req: Request, res: Response): Promise<void> {
        const resultArray = await Recipe.find({ slug: req.params.slug })
        res.send(resultArray[0])
    }
}
