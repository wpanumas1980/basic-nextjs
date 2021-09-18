import React from 'react'
import { connection } from '../../db';

export default function index({movies}) {
  console.log('movies: ', movies);
  return (
    <div>
      <h1>Blogs page</h1>
      <div>
        {movies && movies.map( (movie) =>
        <div 
        style={{
          border:'0.5px solid black',
          borderRadius:'4px',
          margin:'5px',
          padding:'2px 10px',
          cursor:'pointer'
        }}
        key={movie.id}>
          <h3>{movie.title}</h3>
          <span>{movie.writer} / {movie.published_date}</span>
          <p>{movie.exerpt}</p>
        </div>
        )}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const conn = connection();
  const res = await conn.query("SELECT id, title, exerpt, detail, writer, TO_CHAR(published_date,'MON-DDD-YYYY HH12:MIPM') published_date FROM movies");
  console.log('res: ', res);
  return {
    props: { movies: res.rows },
  }
}