import 'reflect-metadata'
import 'express-async-errors'
import express, { Request, Response } from 'express'
import handleError from './errors/handleError'
import clientRoutes from './router/clients.routes'
import sessionRoutes from './router/session.routes'
import contactRoutes from './router/contact.routes'

const app = express()
app.use(express.json())

app.use('/clients', clientRoutes)
app.use('/contacts', contactRoutes)
app.use('/login', sessionRoutes)

app.use(handleError)
app.use(express.static('documentation'))
app.use('./', (req:Request, res: Response) => {
    res.render('index.html')
})

export default app