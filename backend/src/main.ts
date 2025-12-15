import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  console.log('db user', process.env.DB_USER);
  console.log('db pass', process.env.DB_PASS);
  console.log('db port', process.env.DB_PORT);
  console.log('db host', process.env.DB_HOST);
  console.log('host', process.env.HOST);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
