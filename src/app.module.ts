import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnimalsModule } from './animals/animals.module';
import { StoreModule } from './store/store.module';
import { DataSource } from 'typeorm';
import { EnclosuresModule } from './enclosures/enclosures.module';

@Module({
  imports: [
    AnimalsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StoreModule,
    EnclosuresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
