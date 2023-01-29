import { MigrationInterface, QueryRunner } from "typeorm";

export class avatar1674994617039 implements MigrationInterface {
    name = 'avatar1674994617039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
    }

}
