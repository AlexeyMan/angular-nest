import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryEntity } from './entry.entity';
import { EntryService } from './entry.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ EntryEntity ]) ],
  controllers: [  ],
  providers: [EntryService]
})
export class EntryModule {}
