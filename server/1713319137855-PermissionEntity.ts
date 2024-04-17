import { MigrationInterface, QueryRunner } from 'typeorm';

export class PermissionEntity1713319137855 implements MigrationInterface {
  name = 'PermissionEntity1713319137855';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // TODO replace truncates with upgrade script
    await queryRunner.query(`TRUNCATE TABLE "api_keys" CASCADE`);
    await queryRunner.query(`TRUNCATE TABLE "user_tokens" CASCADE`);
    await queryRunner.query(`TRUNCATE TABLE "shared_links" CASCADE`);

    await queryRunner.query(
      `CREATE TABLE "permissions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "activity.create" boolean NOT NULL DEFAULT true, "activity.read" boolean NOT NULL DEFAULT true, "activity.update" boolean NOT NULL DEFAULT true, "activity.delete" boolean NOT NULL DEFAULT true, "album.create" boolean NOT NULL DEFAULT true, "album.read" boolean NOT NULL DEFAULT true, "album.update" boolean NOT NULL DEFAULT true, "album.delete" boolean NOT NULL DEFAULT true, "apiKey.create" boolean NOT NULL DEFAULT true, "apiKey.read" boolean NOT NULL DEFAULT true, "apiKey.update" boolean NOT NULL DEFAULT true, "apiKey.delete" boolean NOT NULL DEFAULT true, "asset.create" boolean NOT NULL DEFAULT true, "asset.read" boolean NOT NULL DEFAULT true, "asset.update" boolean NOT NULL DEFAULT true, "asset.delete" boolean NOT NULL DEFAULT true, "authDevice.create" boolean NOT NULL DEFAULT true, "authDevice.read" boolean NOT NULL DEFAULT true, "authDevice.update" boolean NOT NULL DEFAULT true, "authDevice.delete" boolean NOT NULL DEFAULT true, "face.create" boolean NOT NULL DEFAULT true, "face.read" boolean NOT NULL DEFAULT true, "face.update" boolean NOT NULL DEFAULT true, "face.delete" boolean NOT NULL DEFAULT true, "memory.create" boolean NOT NULL DEFAULT true, "memory.read" boolean NOT NULL DEFAULT true, "memory.update" boolean NOT NULL DEFAULT true, "memory.delete" boolean NOT NULL DEFAULT true, "partner.create" boolean NOT NULL DEFAULT true, "partner.read" boolean NOT NULL DEFAULT true, "partner.update" boolean NOT NULL DEFAULT true, "partner.delete" boolean NOT NULL DEFAULT true, "person.create" boolean NOT NULL DEFAULT true, "person.read" boolean NOT NULL DEFAULT true, "person.update" boolean NOT NULL DEFAULT true, "person.delete" boolean NOT NULL DEFAULT true, "sharedLink.create" boolean NOT NULL DEFAULT true, "sharedLink.read" boolean NOT NULL DEFAULT true, "sharedLink.update" boolean NOT NULL DEFAULT true, "sharedLink.delete" boolean NOT NULL DEFAULT true, "systemConfig.read" boolean NOT NULL DEFAULT true, "systemConfig.update" boolean NOT NULL DEFAULT true, "systemConfig.delete" boolean NOT NULL DEFAULT true, "stack.create" boolean NOT NULL DEFAULT true, "stack.read" boolean NOT NULL DEFAULT true, "stack.update" boolean NOT NULL DEFAULT true, "stack.delete" boolean NOT NULL DEFAULT true, "tag.create" boolean NOT NULL DEFAULT true, "tag.read" boolean NOT NULL DEFAULT true, "tag.update" boolean NOT NULL DEFAULT true, "tag.delete" boolean NOT NULL DEFAULT true, "user.create" boolean NOT NULL DEFAULT true, "user.read" boolean NOT NULL DEFAULT true, "user.update" boolean NOT NULL DEFAULT true, "user.delete" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "api_keys" ADD "permissionsId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "api_keys" ADD CONSTRAINT "UQ_fce2bce6edafdbf7f8c7fdee92a" UNIQUE ("permissionsId")`,
    );
    await queryRunner.query(`ALTER TABLE "user_token" ADD "permissionsId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "user_token" ADD CONSTRAINT "UQ_1c7b3e3027084dd6a4d096d3702" UNIQUE ("permissionsId")`,
    );
    await queryRunner.query(`ALTER TABLE "shared_links" ADD "permissionsId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "shared_links" ADD CONSTRAINT "UQ_a8f89cc59db874fd3691870ea70" UNIQUE ("permissionsId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "api_keys" ADD CONSTRAINT "FK_fce2bce6edafdbf7f8c7fdee92a" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_token" ADD CONSTRAINT "FK_1c7b3e3027084dd6a4d096d3702" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "shared_links" ADD CONSTRAINT "FK_a8f89cc59db874fd3691870ea70" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "shared_links" DROP CONSTRAINT "FK_a8f89cc59db874fd3691870ea70"`);
    await queryRunner.query(`ALTER TABLE "user_token" DROP CONSTRAINT "FK_1c7b3e3027084dd6a4d096d3702"`);
    await queryRunner.query(`ALTER TABLE "api_keys" DROP CONSTRAINT "FK_fce2bce6edafdbf7f8c7fdee92a"`);
    await queryRunner.query(`ALTER TABLE "shared_links" DROP CONSTRAINT "UQ_a8f89cc59db874fd3691870ea70"`);
    await queryRunner.query(`ALTER TABLE "shared_links" DROP COLUMN "permissionsId"`);
    await queryRunner.query(`ALTER TABLE "user_token" DROP CONSTRAINT "UQ_1c7b3e3027084dd6a4d096d3702"`);
    await queryRunner.query(`ALTER TABLE "user_token" DROP COLUMN "permissionsId"`);
    await queryRunner.query(`ALTER TABLE "api_keys" DROP CONSTRAINT "UQ_fce2bce6edafdbf7f8c7fdee92a"`);
    await queryRunner.query(`ALTER TABLE "api_keys" DROP COLUMN "permissionsId"`);
    await queryRunner.query(`DROP TABLE "permissions"`);
  }
}
