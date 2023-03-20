import {hashSync} from 'bcryptjs'
import { BeforeInsert, BeforeRemove, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Contact from './contacts.entity'

@Entity('clients')
class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string
    
    @Column()
    telephone: number
    
    @Column()
    linkedin: string

    @Column({default: true})
    isActive: boolean
    
    @CreateDateColumn()
    createdAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @BeforeRemove()
    isActiveChanged() {
        this.isActive = false
    }

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }

    @OneToMany(() => Contact, (contact) => contact.client)
    contacts: Contact[]
}

export default Client