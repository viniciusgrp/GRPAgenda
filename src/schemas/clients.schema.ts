import * as yup from 'yup'

export const createClientSerializer = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    telephone: yup.number().required(),
    linkedin: yup.string().required(),
})

export const updateClientSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),
    telephone: yup.number().notRequired(),
    linkedin: yup.string().notRequired(),
})