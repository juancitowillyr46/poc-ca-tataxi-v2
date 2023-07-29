import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const config = new DocumentBuilder()
.addBearerAuth()
.setTitle('Social Wires')
.setDescription('Social Wires API description')
.setVersion('1.0')
.addTag('Social')
.build();