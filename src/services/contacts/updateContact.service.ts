import Contact from '../../entities/contacts.entity'
import AppError from '../../errors/AppError'
import {AppDataSource} from '../../data-source'
import { updateClientSerializer } from '../../schemas/clients.schema'
import { IContactUpdate } from '../../interfaces/contact.interface'

export const updateContactService = async (dataToUpdate: IContactUpdate, foundUser: Contact, id: string) => {
    try {
        const validatedDataToUpdate = await updateClientSerializer.validate(dataToUpdate, {
            abortEarly: false,
            stripUnknown: true
        })

        const contactRepository = AppDataSource.getRepository(Contact)

        await contactRepository.update(id, {
            email: validatedDataToUpdate.email || foundUser.email,
            name: validatedDataToUpdate.name || foundUser.name,
            telephone: validatedDataToUpdate.telephone || foundUser.telephone,
            linkedin: validatedDataToUpdate.linkedin || foundUser.linkedin,
        })

        const numberId = Number(id)

        const updatedClient = await contactRepository.findOneBy({
            id: numberId
        })

        return updatedClient
    } catch (error: any) {
        throw new AppError(error, 400)
    }
}