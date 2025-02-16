import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GifController } from './gifcontroller'; // Đổi tên controller ở đây
import { SodaController } from './sodacontroller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, GifController, SodaController], // Đảm bảo tên controller ở đây đúng
  providers: [AppService],
})
export class AppModule {}
