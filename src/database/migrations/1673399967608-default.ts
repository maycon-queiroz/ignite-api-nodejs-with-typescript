import { MigrationInterface, QueryRunner } from "typeorm";

export class default1673399967608 implements MigrationInterface {
    name = 'default1673399967608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "admin" TO "isAdmin"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdmin" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "isAdmin" TO "admin"`);
    }

}
