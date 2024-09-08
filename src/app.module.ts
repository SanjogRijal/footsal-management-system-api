import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfig from './config/dbConfig';
import serverConfig from './config/serverConfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [serverConfig, dbConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService): Promise<any> => {
        console.log({
          type: configService?.get('dbConfig.type'),
          host: configService?.get('dbConfig.host'),
          port: configService?.get('dbConfig.port'),
          username: configService?.get('dbConfig.username'),
          password: configService?.get('dbConfig.password'),
          database: configService?.get('dbConfig.database'),
          entities: [],
          synchronize: configService.get('dbConfig.synchronize'),
        });
        return {
          type: configService?.get('dbConfig.type'),
          host: configService?.get('dbConfig.host'),
          port: configService?.get('dbConfig.port'),
          username: configService?.get('dbconfig.username'),
          password: configService?.get('dbconfig.password'),
          database: configService?.get('dbConfig.database'),
          entities: [],
          synchronize: configService.get('dbConfig.synchronize'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
