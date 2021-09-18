import React from 'react';
import { getMovies } from '../../db';

export default function Blog({ movie }) {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      {/* details form database */}
      <h2>{movie.title}</h2>
      <span>
        {movie.writer} / {movie.published_date}
      </span>
      <p>{movie.detail}</p>
    </div>
  )
};

export const getStaticPaths = async () => {

  const movies = await getMovies();
  const paths = movies.map(movie => ({ params: { blogId: movie.id } }));

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async ({params}) => {

  const movies = await getMovies();
  const movie = movies.find(movie => movie.id === params.blogId);

  return {
    props: { movie }
  }

};