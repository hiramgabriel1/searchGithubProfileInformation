import { Module } from '@nestjs/common';
import { ProfilesModule } from './profiles/profiles.module';
import { databaseProviders } from './profiles/providers/database.providers';

@Module({
  imports: [ProfilesModule],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
