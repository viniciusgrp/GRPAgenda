import { AppDataSource } from '../../data-source'
import Contact from '../../entities/contacts.entity'

export const getContactService = async (id: string): Promise<Contact> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const numberId = Number(id)

    const foundContact = await contactRepository.findOneByOrFail({id: numberId})

    return foundContact
}