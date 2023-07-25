
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import { User } from '../entities/user.entity';

const config: TypeOrmModuleOptions = {
  type: 'sqlite', // Tipo de Motor de Base de datos
  database: './database/cruddb.db', // Nombre de la base de datos
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Mapeo de entidades
  synchronize: true, // Definir si la bd se sincroniza con las entidades
};

export default config;
