import AppError from '../../errors/AppError'
import { AppDataSource } from '../../data-source'
import Client from '../../entities/clients.entity'

export const getClientService = async (id: string): Promise<Client> => {
    const clientsRepository = AppDataSource.getRepository(Client)

    const numberId = Number(id)

    const foundClient = await clientsRepository.findOneByOrFail({id: numberId})

    return foundClient
}