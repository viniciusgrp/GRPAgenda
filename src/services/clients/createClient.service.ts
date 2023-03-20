import { createClientSerializer } from './../../schemas/clients.schema';
import { AppDataSource } from '../../data-source'
import Client from '../../entities/clients.entity'
import AppError from '../../errors/AppError'
import { IClientRequest } from '../../interfaces/client.interface';


export const createClientService = async (userData: IClientRequest): Promise<Client> => {
    try {
        const clientDataValidated = await createClientSerializer.validate(userData, {
            stripUnknown: true,
            abortEarly: false
        })

        const clientsRepository = AppDataSource.getRepository(Client)
        const createdClient = clientsRepository.create(clientDataValidated)
        await clientsRepository.save(createdClient)

        delete createdClient.password

        return createdClient
    } catch (error: any) {
        throw new AppError(error, 400)
    }
}