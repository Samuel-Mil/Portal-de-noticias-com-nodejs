import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1630796646014 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "CHAR(32)",
            isPrimary: true,
          },
          {
            name: "login",
            type: "VARCHAR(255)",
          },
          {
            name: "password",
            type: "VARCHAR(255)",
          },
          {
            name: "username",
            type: "VARCHAR(255)",
          },
          {
            name: "isAdmin",
            type: "boolean",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
