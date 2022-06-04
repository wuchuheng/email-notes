/**
 *  This file is part of emailNotes.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/6/5 05:25
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'category',
})
export default class Category {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    pid:number;

  @Column()
    name: string;
}
