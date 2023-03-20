interface IClientRequest {
    name: string,
    email: string,
    password: string,
    telephone: number,
    linkedin: string,
}

interface IClientUpdate {
    name?: string,
    email?: string,
    password?: string,
    telephone?: number,
    linkedin?: string,
}

export { IClientRequest, IClientUpdate }