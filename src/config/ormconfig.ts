import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST, // container name
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false, // use migrations instead of sync
  logging: true,
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
})
