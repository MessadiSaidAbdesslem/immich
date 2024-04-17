import { APIKeyEntity } from 'src/entities/api-key.entity';
import { SharedLinkEntity } from 'src/entities/shared-link.entity';
import { UserTokenEntity } from 'src/entities/user-token.entity';
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

// 'asset.upload'!: boolean;
// 'asset.download'!: boolean;
// 'asset.trash'!: boolean;
// 'asset.restore'!: boolean;
// 'asset.share'!: boolean;
// 'asset.view'!: boolean;

// 'album.addAsset'!: boolean;
// 'album.removeAsset'!: boolean;
// 'album.share'!: boolean;
// 'album.download'!: boolean;

export enum AuthorizationPermission {
  ACTIVITY_CREATE = 'activity.create',
  ACTIVITY_READ = 'activity.read',
  ACTIVITY_UPDATE = 'activity.update',
  ACTIVITY_DELETE = 'activity.delete',

  ALBUM_CREATE = 'album.create',
  ALBUM_READ = 'album.read',
  ALBUM_UPDATE = 'album.update',
  ALBUM_DELETE = 'album.delete',

  API_KEY_CREATE = 'apiKey.create',
  API_KEY_READ = 'apiKey.read',
  API_KEY_UPDATE = 'apiKey.update',
  API_KEY_DELETE = 'apiKey.delete',

  ASSET_CREATE = 'asset.create',
  ASSET_READ = 'asset.read',
  ASSET_UPDATE = 'asset.update',
  ASSET_DELETE = 'asset.delete',

  AUTH_DEVICE_CREATE = 'authDevice.create',
  AUTH_DEVICE_READ = 'authDevice.read',
  AUTH_DEVICE_UPDATE = 'authDevice.update',
  AUTH_DEVICE_DELETE = 'authDevice.delete',

  FACE_CREATE = 'face.create',
  FACE_READ = 'face.read',
  FACE_UPDATE = 'face.update',
  FACE_DELETE = 'face.delete',

  MEMORY_CREATE = 'memory.create',
  MEMORY_READ = 'memory.read',
  MEMORY_UPDATE = 'memory.update',
  MEMORY_DELETE = 'memory.delete',

  PARTNER_CREATE = 'partner.create',
  PARTNER_READ = 'partner.read',
  PARTNER_UPDATE = 'partner.update',
  PARTNER_DELETE = 'partner.delete',

  PERSON_CREATE = 'person.create',
  PERSON_READ = 'person.read',
  PERSON_UPDATE = 'person.update',
  PERSON_DELETE = 'person.delete',

  SHARED_LINK_CREATE = 'sharedLink.create',
  SHARED_LINK_READ = 'sharedLink.read',
  SHARED_LINK_UPDATE = 'sharedLink.update',
  SHARED_LINK_DELETE = 'sharedLink.delete',

  // SYSTEM_CONFIG_CREATE='systemConfig.create',
  SYSTEM_CONFIG_READ = 'systemConfig.read',
  SYSTEM_CONFIG_UPDATE = 'systemConfig.update',
  SYSTEM_CONFIG_DELETE = 'systemConfig.delete',

  STACK_CREATE = 'stack.create',
  STACK_READ = 'stack.read',
  STACK_UPDATE = 'stack.update',
  STACK_DELETE = 'stack.delete',

  TAG_CREATE = 'tag.create',
  TAG_READ = 'tag.read',
  TAG_UPDATE = 'tag.update',
  TAG_DELETE = 'tag.delete',

  USER_CREATE = 'user.create',
  USER_READ = 'user.read',
  USER_UPDATE = 'user.update',
  USER_DELETE = 'user.delete',
}

@Entity('permissions')
export class AuthorizationEntity implements Record<AuthorizationPermission, boolean> {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ACTIVITY_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ACTIVITY_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ACTIVITY_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ACTIVITY_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ALBUM_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ALBUM_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ALBUM_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ALBUM_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.API_KEY_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.API_KEY_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.API_KEY_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.API_KEY_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ASSET_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ASSET_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ASSET_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.ASSET_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.AUTH_DEVICE_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.AUTH_DEVICE_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.AUTH_DEVICE_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.AUTH_DEVICE_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.FACE_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.FACE_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.FACE_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.FACE_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.MEMORY_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.MEMORY_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.MEMORY_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.MEMORY_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.PARTNER_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.PARTNER_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.PARTNER_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.PARTNER_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.PERSON_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.PERSON_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.PERSON_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.PERSON_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.SHARED_LINK_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.SHARED_LINK_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.SHARED_LINK_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.SHARED_LINK_DELETE]!: boolean;

  // @Column({ type: 'boolean', default: true })
  // [AuthorizationPermission.SYSTEM_CONFIG_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.SYSTEM_CONFIG_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.SYSTEM_CONFIG_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.SYSTEM_CONFIG_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.STACK_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.STACK_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.STACK_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.STACK_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.TAG_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.TAG_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.TAG_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.TAG_DELETE]!: boolean;

  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.USER_CREATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.USER_READ]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.USER_UPDATE]!: boolean;
  @Column({ type: 'boolean', default: true })
  [AuthorizationPermission.USER_DELETE]!: boolean;

  @OneToOne(() => APIKeyEntity, ({ permissions }) => permissions, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  apiKey?: APIKeyEntity;

  @OneToOne(() => UserTokenEntity, ({ permissions }) => permissions, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  userToken?: UserTokenEntity;

  @OneToOne(() => SharedLinkEntity, ({ permissions }) => permissions, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  sharedLink?: SharedLinkEntity;
}
