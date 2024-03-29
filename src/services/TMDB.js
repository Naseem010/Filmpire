import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({
        // get Genre
        getGenre: builder.query({
        query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
      }),
        // getmovies by [type]
    getMovies: builder.query({
            query: ({ genreIdOrCategoryName, page }) => {
                //* Get Movies by Category

                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
                }
                //* Get Movies by Genre

                if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
                }
                //* Get Popular Movies

             return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            },
        }),

    }),
});
export const { useGetMoviesQuery, useGetGenreQuery } = tmdbApi;
