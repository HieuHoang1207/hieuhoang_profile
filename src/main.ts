import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Cấu hình EJS làm view engine
  app.setViewEngine('ejs');
  
  // Đặt thư mục chứa các view (EJS templates)
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));

  // Đặt thư mục static (cho các file như CSS, JS)
  app.useStaticAssets(path.join(__dirname, '..', 'public'));

  await app.listen(3000);
}
bootstrap();
