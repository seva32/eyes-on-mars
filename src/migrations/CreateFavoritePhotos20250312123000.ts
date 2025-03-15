import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export class CreateFavoritePhotos20250312123000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'favorite_photo',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'photoUrl',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rover',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'camera',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sol',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'userId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
    )

    await queryRunner.createForeignKey(
      'favorite_photo',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('favorite_photo')
    if (table) {
      const foreignKey = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf('userId') !== -1,
      )
      if (foreignKey) {
        await queryRunner.dropForeignKey('favorite_photo', foreignKey)
      }
    }

    await queryRunner.dropTable('favorite_photo')
  }
}
