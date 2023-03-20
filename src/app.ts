import 'reflect-metadata'
import 'express-async-errors'
import express, { Request, Response } from 'express'
import handleError from './errors/handleError'

const app = express()
app.use(express.json())

app.use(handleError)
app.use(express.static('documentation'))
app.use('./', (req:Request, res: Response) => {
    res.render('index.html')
})

export default app