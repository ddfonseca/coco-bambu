import { Controller, Get } from '@overnightjs/core'
import { Recipe } from '../models/recipe.model'
import { Request, Response } from 'express'
import path from 'path'

@Controller('')
export class AngularController {
    @Get()
    public runAngular(_: Request, res: Response): void {
        res.sendFile(path.join(__dirname, '..', '..', 'angular', 'index.html'))
    }
}
