
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import { MessageEntity } from 'src/modules/messages/message.entity';
import { UserEntity } from 'src/modules/users/user.entity';

const config: TypeOrmModuleOptions = {
  type: 'sqlite', // Tipo de Motor de Base de datos
  database: './database/cruddb.db', // Nombre de la base de datos
  entities: [UserEntity, MessageEntity], // Mapeo de entidades
  synchronize: true, // Definir si la bd se sincroniza con las entidades
};

export default config;
