import { IsString, IsBoolean } from 'class-validator';

export class UpdateEnclosureDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsBoolean()
  at_capacity: boolean;
}
