import { AuthorizationEntity } from 'src/entities/authorization.entity';
import { UserEntity } from 'src/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_token')
export class UserTokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ select: false })
  token!: string;

  @Column()
  userId!: string;

  @ManyToOne(() => UserEntity, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  user!: UserEntity;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;

  @Column({ default: '' })
  deviceType!: string;

  @Column({ default: '' })
  deviceOS!: string;

  @OneToOne(() => AuthorizationEntity, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  permissions!: AuthorizationEntity;
}
