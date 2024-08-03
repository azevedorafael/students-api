import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nanoid } = require('nanoid');

@Entity('students')
export class Student {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: string;

  @BeforeInsert()
  generateId() {
    this.id = `dev_${nanoid()}`;
  }
}
