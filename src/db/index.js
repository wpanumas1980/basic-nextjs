import { Pool } from 'pg';

export const connection = () => {
  return new Pool({
    database: 'test',
    user: 'test',
    password: 'qwerty',
    host: 'localhost',
    port: 5432
  });
}