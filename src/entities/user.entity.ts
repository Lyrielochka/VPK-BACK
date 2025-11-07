import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, } from "typeorm";
import { Profile } from "./profile.entites";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  createdAt: Date;

  @OneToOne(() => Profile, (profile) => profile.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  profile: Profile;
}
