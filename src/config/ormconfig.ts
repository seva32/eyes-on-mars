import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '../entities/User'
import { Profile } from '../entities/Profile'
import { FavoritePhoto } from '../entities/FavoritePhoto'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST_DEV, // container name
  port: parseInt(process.env.POSTGRES_PORT!, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false, // use migrations instead of sync
  logging: true,
  entities: [User, Profile, FavoritePhoto],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
})
