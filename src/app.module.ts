import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './app/auth/auth.module';
import { VenteModule } from './app/vente/vente.module';

@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          name: "statitisque", // Connection Name (Optional)
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: ["dist/**/*.entity{.ts,.js}"],
          autoLoadEntities: true, // true = find & load all entities in the project
          synchronize: false, // Don't Migrate & Overwrite the Database
          // logging: ["info", "error"], // boolean | "all" | ("query" | "schema" | "error" | "warn" | "info" | "log" | "migration")[]
        }),
        inject: [ConfigService],
      }),
      UserModule,
      AuthModule,
      VenteModule,
  ]
  , controllers: [],
  providers: [],
})
export class AppModule { }
