import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateArticles1630797111042 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "articles",
        columns: [
          {
            name: "id",
            type: "CHAR(32)",
            isPrimary: true,
          },
          {
            name: "title",
            type: "VARCHAR(255)",
          },
          {
            name: "content",
            type: "text",
          },
          {
            name: "category",
            type: "VARCHAR(255)",
          },
          {
            name: "author",
            type: "VARCHAR(255)",
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
    await queryRunner.dropTable("articles");
  }
}
