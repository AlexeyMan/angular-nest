import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddressEntity } from './address.entity';
import { AddressService } from './address.service';

@ApiTags('Адреса')
@Controller('address')
export class AddressController {
  constructor(private entryService: AddressService) {}

  @ApiOperation({ summary: 'Получить улицы' })
  @ApiResponse({ status: 200, type: [AddressEntity] })
  @Post()
  getStreet(@Body() city) {
    return this.entryService.findStreets(city);
  }
  // @ApiOperation({ summary: 'Получить всех пользователей' })
  // @Get()
  // getAll() {
  //   return "this.entryService.getAllUsers()";
  // }


}
