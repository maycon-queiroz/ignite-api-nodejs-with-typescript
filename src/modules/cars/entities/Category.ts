import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity('categories')
export class Category {
  @PrimaryColumn({ type: "uuid" })
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}