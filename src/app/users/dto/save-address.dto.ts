/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsPostalCode } from "class-validator";

export class SaveAddressDto {
  id: string;

  @IsNotEmpty()
  street: string;
  
  @IsNotEmpty()
  number: string;
  
  complement: string;
  
  @IsNotEmpty()
  city: string;
  
  @IsNotEmpty()
  state: string;
  
  @IsNotEmpty()
  country: string;
  
  @IsPostalCode('BR')
  postalCode: string;
}