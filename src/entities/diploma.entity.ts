import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity("diplomas")
export class Diploma extends BaseEntity {
  @PrimaryGeneratedColumn()
  idDiploma: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  img: string;
}
