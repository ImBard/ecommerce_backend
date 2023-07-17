import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { SaveUserDto } from './dto/save-user.dto';
import { SaveAddressDto } from './dto/save-address.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async save(@Body() body: { user: SaveUserDto; address: SaveAddressDto }) {
    const { user, address } = body;
    return this.usersService.save(user, address);
  }
}
