import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ArticlesImages1630883223058 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "articles_images",
        columns: [
          {
            name: "id",
            type: "CHAR(32)",
            isPrimary: true,
          },
          {
            name: "article_id",
            type: "CHAR(32)",
          },
          {
            name: "image_name",
            type: "TEXT",
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

        foreignKeys: [
          {
            name: "FKArticleID",
            columnNames: ["article_id"],
            referencedTableName: "articles",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("articles_images");
  }
}
