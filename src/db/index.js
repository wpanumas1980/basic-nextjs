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

export const getMovies = async () =>{
  const res = await connection().query("SELECT id, title, exerpt, detail, writer, TO_CHAR(published_date,'DD-MON-YYYY HH12:MIPM') published_date FROM movies ORDER BY published_date DESC");
  return res.rows;
}