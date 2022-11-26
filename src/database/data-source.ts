import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    synchronize: true,
    logging: false,
    entities: [`./src/modules/**/entities/*.{ts,js}`],
    migrations: [`./src/database/migrations/*.{ts,js}`],
    subscribers: [],
    migrationsTableName: "migrations",
})
