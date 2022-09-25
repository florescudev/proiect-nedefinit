import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    Id: string;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    Password: string;

    @Column({ nullable: true })
    ProfilePicture: string;

    @Column()
    Email: string;

    @BeforeInsert()
    emailToLowerCase() {
        this.Email = this.Email.toLowerCase();
    }
}