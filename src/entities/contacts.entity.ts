import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import Client from './clients.entity'

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    telephone: number

    @Column()
    linkedin: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => Client, (client) => client.contacts)
    client: Client
}

export default Contact