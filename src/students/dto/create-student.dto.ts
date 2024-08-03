import { IsDateString, IsEmail, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dateOfBirth: string;
}
