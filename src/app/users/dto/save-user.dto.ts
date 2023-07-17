/* eslint-disable prettier/prettier */
import { IsBoolean, IsEmail, IsISO8601, IsNotEmpty, IsPhoneNumber } from "class-validator";
import { AddressEntity } from "../entities/address.entity";
import { ReviewsEntity } from "../../products/entities/reviews.entity";
import { CommentsEntity } from "../../products/entities/comments.entity";
import { SaveAddressDto } from "./save-address.dto";

export class SaveUserDto {
  id: string;

  @IsNotEmpty()
  name: string;

  @IsISO8601()
  birthDate: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('BR')
  phoneNumber: string;

  // @IsBoolean()
  isAdmin: boolean;

  urlImgPerfil: string;

  @IsNotEmpty()
  addressEntity: SaveAddressDto[];

  reviewsEntity: ReviewsEntity[];
  
  commentsEntity: CommentsEntity[];
}