import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('Address')
export class EntryEntity  {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Санкт-петербург', description: 'Город' })
  @Column('varchar', { length: 500 })
  city: string;

  @ApiProperty({ example: 'Афонская', description: 'улица' })
  @Column('varchar', { length: 500 })
  street: string;

  @ApiProperty({ example: '20', description: 'дом' })
  @Column('varchar',{nullable:true})
  house: string;

  @ApiProperty({ example: '2', description: 'корпус' })
  @Column('varchar',{nullable:true})
  korpus: string;

  @ApiProperty({ example: 'А', description: 'Литера' })
  @Column('varchar',{nullable:true})
  liter: string;

  @ApiProperty({ example: '2', description: 'подъезд' })
  @Column('varchar',{nullable:true})
  entrance: string;
}
