import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieResponse } from "../interfaces/movieInterface"

interface MoviesState{
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upComing: Movie[]


}
export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [ moviesState, setMoviesState ] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: [],
    })
    const getMovies = async () =>{

        const nowPlayingPromise = await movieDB.get<MovieResponse>('/now_playing')
        const popularPromise = await movieDB.get<MovieResponse>('/popular')
        const topRatedPromise= await movieDB.get<MovieResponse>('/top_rated')
        const upCominPromise = await movieDB.get<MovieResponse>('/upcoming')

        const res = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upCominPromise])
      

        setMoviesState({
            nowPlaying: res[0].data.results,
            popular: res[1].data.results,
            topRated: res[2].data.results,
            upComing: res[3].data.results,
        })
       
        setIsLoading(false)
    }
    useEffect(() => {
       getMovies();
    }, [])
    return {
        ...moviesState,
        isLoading
    }
}
