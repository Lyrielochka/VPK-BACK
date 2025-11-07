import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity("news")
export class News extends BaseEntity {
  @PrimaryGeneratedColumn()
  idNews: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  author: string;

  @Column()
  date: string;

  @Column({ nullable: true })
  img: string; 

  @Column("text")
  summary: string;
}
