import { Router } from 'express'
import { createClientController, getAllClientsController, getClientController, deleteClientController, updateClientController } from '../controllers/clients.controller'
import { ensureAuthMiddleware } from '../middleware/ensureAuth.middleware'
import { ensureIDExistsMiddleware } from '../middleware/ensureIDExists.middleware'
import { ensureIsValidForPatchMiddleware } from '../middleware/ensureIsValidForPatch.middleware'

const clientRoutes = Router()

clientRoutes.post('', ensureAuthMiddleware, createClientController)
clientRoutes.get('', getAllClientsController)
clientRoutes.get('/:id', getClientController)
clientRoutes.delete('/:id', deleteClientController)
clientRoutes.patch('/:id', ensureIDExistsMiddleware, ensureAuthMiddleware, ensureIsValidForPatchMiddleware, updateClientController)

export default clientRoutes