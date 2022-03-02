import React from 'react'
import { FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';

import  Icon  from 'react-native-vector-icons/Ionicons'
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { ActorCard } from './ActorCard';

interface Props{
    movieFull: MovieFull,
    cast: Cast[]
}
export const DetailMovie = ({movieFull, cast}: Props) => {
    return (
       <>
       {/* Detalles */}
       <View style={{ marginHorizontal: 20}}>
           <View style={{flexDirection:'row'}}>
                <Icon 
                    name="star-outline"
                    color="grey"
                    size={ 16}
                />
                <Text> { movieFull.vote_average} </Text>
                <Text> 
                    - { movieFull.genres.map( g => g.name).join(', ')}
                </Text>
           </View>

           {/* Historia */}
           <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold'}}> 
                Historia
           </Text>
           <Text>{movieFull.overview}</Text>

            {/* Presupuesto */}
            <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold'}}> 
                Presupuesto
           </Text>
           <Text>{ currencyFormatter.format(movieFull.budget, {code:'USD'})}</Text>

       </View>

        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom:100}}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal:20}}> 
                    Actores
            </Text>
               {/*  <ActorCard actor= {cast[0]}/> */}
               <FlatList
                    data={cast}
                    renderItem={( {item }: any)=>  <ActorCard actor= {item}/> }
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator= {false}
                    style={{ marginTop:10, marginLeft:20, height: 80}}
                />
            </View>
       </>
    )
}
