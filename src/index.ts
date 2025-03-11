import 'reflect-metadata' // Required for TypeORM
import { AppDataSource } from './config/ormconfig'

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })
