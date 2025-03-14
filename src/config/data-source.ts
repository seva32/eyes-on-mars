// src/data-source.ts
import { DataSource } from 'typeorm'
import { AppDataSource as ormConfig } from './ormconfig'

export let AppDataSource: DataSource

export const initializeDataSource = async () => {
  if (!AppDataSource) {
    AppDataSource = ormConfig

    try {
      await AppDataSource.initialize()
      console.log('Data Source has been initialized!')
    } catch (error) {
      console.error('Error during Data Source initialization', error)
      throw error
    }
  }

  return AppDataSource
}
