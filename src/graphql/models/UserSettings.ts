/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_settings' })
@ObjectType()
export class UserSettings {
  @PrimaryColumn()
  @Field((type) => Int, { nullable: false })
  userId: number;

  @Column({ default: false })
  @Field({ defaultValue: false })
  receiveNotifications: boolean;

  @Column({ default: false })
  @Field({ defaultValue: false })
  receiveEmail: boolean;
}
