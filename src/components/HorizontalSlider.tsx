import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MovieCard } from './MovieCard'
import { Movie } from '../interfaces/movieInterface';

interface Props{
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider = ({title, movies}:Props) => {
    return (
        <View style={{ 
         height: (title) ? 260 : 220
         }}>
        {
            title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginHorizontal:5}}>{title}</Text>
        }
        <View style={{ marginLeft:5}}>
        <FlatList
         data={movies}
         renderItem={( {item }: any)=>  <MovieCard movie= {item} width={140} height={200}/> }
         keyExtractor={(item) => item.id.toString()}
         horizontal={true}
         showsHorizontalScrollIndicator= {false}
        />
        </View>
       
       </View>
    )
}
