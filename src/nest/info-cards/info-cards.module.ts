import { Module } from '@nestjs/common';
import { InfoCardController } from './info-cards.controller';
import { InfoCardService } from './info-cards.service';

@Module({
  controllers: [InfoCardController],
  providers: [InfoCardService]
})
export class InfoCardModule {}
