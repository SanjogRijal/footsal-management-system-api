import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CreatePlayersDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  preferredPosition: string;

  @IsString()
  @IsNotEmpty()
  joiningDate: Date;

  @IsNumber()
  rating: number;
}
