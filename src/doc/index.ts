import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
export const initDoc = (app) => {
    const options = new DocumentBuilder().setTitle('项目接口文档').setDescription('社交项目，包含，论坛，游戏，聊天').setVersion('1').build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('/api-docs', app, document)
}
