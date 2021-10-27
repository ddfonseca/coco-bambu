import { Server } from '@overnightjs/core'
import express, { Application } from 'express'
import { RecipeController } from './controllers/recipes'
import * as database from './database'
import * as http from 'http'
import cors from 'cors'
import expressPino from 'express-pino-logger'
import { AngularController } from './controllers/angular'
import path from 'path'

export class SetupServer extends Server {
    private server?: http.Server
    constructor(private port = 3000) {
        super()
    }

    public async init(): Promise<void> {
        this.setupExpress()
        this.setupControllers()
        await this.databaseSetup()
    }

    private setupExpress(): void {
        this.app.use(express.json())
        this.app.use(express.static('public'))
        this.app.use('/', express.static('angular'))
        this.app.use(cors({ origin: '*' }))
    }

    private setupControllers(): void {
        const recipeController = new RecipeController()
        const angularController = new AngularController()
        this.addControllers([recipeController, angularController])
    }

    private async databaseSetup(): Promise<void> {
        await database.connect().catch((e) => {
            console.warn('DB connect error: ', e)
        })
    }

    public async close(): Promise<void> {
        await database.close()
    }

    public getApp(): Application {
        return this.app
    }

    public start(): void {
        this.server = this.app.listen(this.port, () => {
            console.log('Server listening on port: ' + this.port)
        })
    }
}
