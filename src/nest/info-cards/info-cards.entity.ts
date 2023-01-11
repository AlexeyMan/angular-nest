import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('cards')
export class СardsEntity  {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty({ example: 'Вывоз мусора', description: 'Заголовок карточки' })
  @Column('varchar', { length: 500 })
  title: string;

  @ApiProperty({ example: 'Уважаемые...', description: 'текст сообщение' })
  @Column('varchar', { length: 1000 })
  info: string;

  @ApiProperty({ example: '2', description: 'Оформление карточки, статус' })
  @Column('varchar',{nullable:true})
  status: number;

  @ApiProperty({ example: 'false', description: 'отображение карточки пользователю' })
  @Column('varchar',{nullable:true})
  catVisible: boolean;

  @ApiProperty({ example: 'А', description: 'Время до которого ототображать карточку' })
  @Column('varchar',{nullable:true})
  delay: string;

  @ApiProperty({ example: 'false', description: 'Время отображения карточки закончилось' })
  @Column('varchar',{nullable:true})
  timeOff: boolean;

  @ApiProperty({ example: '[{},{}]', description: 'Перечень адресов которые будут отображать карточку' })
  @Column('varchar',{nullable:true})
  allowed: string;
}
