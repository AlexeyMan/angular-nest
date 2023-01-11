import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressEntity } from './address.entity';

@Injectable()
export class AddressService {
    // private readonly serv: typeof EntryEntity;
    constructor(
        @InjectRepository(AddressEntity)
    private usersRepository: Repository<AddressEntity>,
      ) {}

    async findStreets(city): Promise<AddressEntity[]> {
        const streets = await this.usersRepository.find({ where: {city: city }});
        return streets;
      }

}
