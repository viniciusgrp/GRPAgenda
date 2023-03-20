import Client from '../../entities/clients.entity'
import { IClientUpdate } from '../../interfaces/client.interface' 
import AppError from '../../errors/AppError'
import {AppDataSource} from '../../data-source'
import { updateClientSerializer } from '../../schemas/clients.schema'

export const updateClientService = async (dataToUpdate: IClientUpdate, foundUser: Client, id: string) => {
    try {
        const validatedDataToUpdate = await updateClientSerializer.validate(dataToUpdate, {
            abortEarly: false,
            stripUnknown: true
        })

        const clientRepository = AppDataSource.getRepository(Client)

        await clientRepository.update(id, {
            email: validatedDataToUpdate.email || foundUser.email,
            name: validatedDataToUpdate.name || foundUser.name,
            telephone: validatedDataToUpdate.telephone || foundUser.telephone,
            linkedin: validatedDataToUpdate.linkedin || foundUser.linkedin,
            password: validatedDataToUpdate.password || foundUser.password
        })

        const numberId = Number(id)

        const updatedUser = await clientRepository.findOneBy({
            id: numberId
        })

        return updatedUser
    } catch (error: any) {
        throw new AppError(error, 400)
    }
}