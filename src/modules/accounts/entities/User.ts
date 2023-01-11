import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity("users")
export class User {
  @PrimaryColumn({ type: "uuid" })
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @Column()
  email: string

  @Column()
  drive_license: string

  @Column({ type: "boolean", default: false })
  isAdmin: boolean

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}