import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersAndProfiles1710150000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create Users table
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "username", type: "varchar", isUnique: true },
                { name: "email", type: "varchar", isUnique: true, isNullable: true },
                { name: "password", type: "varchar", isNullable: true },
                { name: "oauthProvider", type: "varchar", isNullable: true },
                { name: "oauthId", type: "varchar", isNullable: true },
                { name: "createdAt", type: "timestamp", default: "now()" },
                { name: "updatedAt", type: "timestamp", default: "now()" },
            ]
        }), true);

        // Create Profiles table
        await queryRunner.createTable(new Table({
            name: "profile",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "avatarUrl", type: "varchar", isNullable: true },
                { name: "bio", type: "text", isNullable: true },
                { name: "userId", type: "int", isUnique: true }, // One-to-One relationship
            ]
        }), true);

        // Add foreign key: Profile -> User
        await queryRunner.createForeignKey("profile", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("profile");
        await queryRunner.dropTable("user");
    }
}

