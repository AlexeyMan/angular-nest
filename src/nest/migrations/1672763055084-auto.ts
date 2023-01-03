import { MigrationInterface, QueryRunner } from "typeorm";

export class auto1672763055084 implements MigrationInterface {
    name = 'auto1672763055084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Address" ("id" SERIAL NOT NULL, "city" character varying(500) NOT NULL, "street" character varying(500) NOT NULL, "house" character varying, "korpus" character varying, "liter" character varying, "entrance" character varying, CONSTRAINT "PK_9034683839599c80ebe9ebb0891" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Address"`);
    }

}
