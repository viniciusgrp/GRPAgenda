import {AppDataSource} from '../../data-source'
import Client from '../../entities/clients.entity'
import AppError from '../../errors/AppError'

export const deleteClientService = async (id: string): Promise<void> => {
    const usersRepository = AppDataSource.getRepository(Client)
    
    const numberId = Number(id)

    const user = await usersRepository.findOneByOrFail({id: numberId})

    if (!user.isActive) {
        throw new AppError('This user is already deactivated', 400)
    }

    await usersRepository.softDelete(user.id)

    await usersRepository.save({...user, isActive: false})
}