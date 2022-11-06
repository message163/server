import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { initDoc } from './doc';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //初始化doc
  initDoc(app)
  //版本控制
  app.enableVersioning({
    defaultVersion:"1",
    type:VersioningType.URI
  })
  //全局前缀
  app.setGlobalPrefix('/api')
  //全局过滤器
  app.useGlobalFilters(new AllExceptionsFilter)
  app.useGlobalInterceptors(new TransformInterceptor)
  await app.listen(3000);
}
bootstrap();

