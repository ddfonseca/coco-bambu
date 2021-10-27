import mongoose, { Document, Model } from 'mongoose'

export interface Recipe {
    _id?: string
    name: string
    slug: string
    description: string
    ingredients: string[]
    steps: string[]
    time: number
    pictures: {
        thumb: string
        cover: string
    }
    finished: boolean
}

const recipeSchema = new mongoose.Schema({
    name: String,
    slug: { type: String, unique: true },
    description: String,
    ingredients: [String],
    steps: [String],
    time: Number,
    pictures: {
        thumb: String,
        hero: String
    },
    finished: Boolean
})

interface RecipeModel extends Omit<Recipe, '_id'>, Document {}

export const Recipe: Model<RecipeModel> = mongoose.model('Recipe', recipeSchema)
