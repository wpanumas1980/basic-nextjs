import React from 'react';
import { getMovies } from '../../db';
import { useRouter } from 'next/router';

export default function Blog({ movie }) {
  const router = useRouter();
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      {/* details form database */}
      {router.isFallback ?
        <p>Loading...</p>
        :
        <>
          <h2>{movie.title}</h2>
          <span>
            {movie.writer} / {movie.published_date}
          </span>
          <p>{movie.detail}</p>
        </>
      }
    </div>
  )
};

export const getStaticPaths = async () => {

  const movies = await getMovies();
  const paths = movies.map(movie => ({ params: { blogId: movie.id } }));

  return {
    paths: paths.slice(0, 5),
    fallback: true
  }
};

export const getStaticProps = async ({ params }) => {

  const movies = await getMovies();
  const movie = movies.find(movie => movie.id === params.blogId);

  return {
    props: { movie }
  }

};