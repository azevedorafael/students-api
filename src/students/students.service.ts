import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly repository: Repository<Student>,
  ) { }

  create(dto: CreateStudentDto) {
    const student = this.repository.create(dto);
    return this.repository.save(student);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateStudentDto) {
    const student = await this.repository.findOneBy({ id });
    if (!student) return null;
    this.repository.merge(student, dto);
    return this.repository.save(student);
  }

  async remove(id: string) {
    const student = await this.repository.findOneBy({ id });
    if (!student) return null;
    return this.repository.remove(student);
  }
}
