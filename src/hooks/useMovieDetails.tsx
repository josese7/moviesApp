import { useEffect, useState } from "react"
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFull } from '../interfaces/movieInterface';

interface movieDetails{
    isLoading: boolean,
    cast: Cast[],
    movieFull?: MovieFull
}
export const useMovieDetails = ( movieId: number) => {
   const [state, setstate] = useState<movieDetails>({
       isLoading: true,
       cast: [],
       movieFull: undefined,
   });
   
   const getMovieDetails = async ()=>{
       const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`)
       const creditsPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

       const [ detailResponse, credistResponse ] = await Promise.all([movieDetailPromise, creditsPromise])

       setstate({
           isLoading: false,
           cast: credistResponse.data.cast,
           movieFull: detailResponse.data
       })
   }

   useEffect(() => {
      getMovieDetails();
   }, [])

   return{
       ...state
   }
}

