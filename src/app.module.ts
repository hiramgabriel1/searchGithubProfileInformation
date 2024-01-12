import { Module } from '@nestjs/common';
import { ProfilesModule } from './profiles/profiles.module';
import { databaseProviders } from './profiles/providers/database.providers';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ProfilesModule,
  ],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
