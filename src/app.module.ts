import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './components/cats/cats.module';
import { UserEntity } from './components/user/user.entity';
import { UserModule } from './components/user/user.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({ folder: './config' }),
    CatsModule,
    UserModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'nestjs',
    //   entities: [UserEntity],
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
    MongooseModule.forRoot('mongodb://localhost/nestjs', {
      connectionName: 'cats',
    }),
    MongooseModule.forRoot('mongodb://localhost/nestjs', {
      connectionName: 'users',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
