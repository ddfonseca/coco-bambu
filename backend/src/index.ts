import { Recipe } from './models/recipe.model'
import { SetupServer } from './server'
import { data } from './util/dump-data'

;(async (): Promise<void> => {
    const server = new SetupServer()
    await server.init()
    server.start()
    await Recipe.insertMany(data).catch((e) => console.log('Already added.'))
})()
