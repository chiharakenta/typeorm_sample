import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTodos1611808253499 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'todos',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true
        },
        {
          name: 'content',
          type: 'varchar'
        }
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
