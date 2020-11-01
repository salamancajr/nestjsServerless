import { IsNumber, IsString } from 'class-validator';

export class CreateBaggageDto {
  @IsNumber()
  readonly weight: number;
  @IsString()
  readonly flight: string;
  @IsString()
  readonly passenger: string;
}
