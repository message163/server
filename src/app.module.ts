import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './common/database/database.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [UserModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
