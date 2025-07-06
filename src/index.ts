import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { note } from './note'

const app = new Elysia()
    .use(swagger())
    .use(note) // Aqui você está usando o plugin que criou
    .listen(3000)