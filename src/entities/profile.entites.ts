import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("profiles")
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  idProfile: number;

  @Column({ nullable: true })
  fullName: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  parents: string;

  @Column({ nullable: true })
  grade: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  rank: string; 

  @Column("simple-array", { nullable: true })
  tokens: string[];

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
