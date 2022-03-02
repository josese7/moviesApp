
import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors'

import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';

import { HorizontalSlider } from '../components/HorizontalSlider';
import { Background } from '../components/Background';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const {width: screenWidth } = Dimensions.get('window');
export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
    const {top} = useSafeAreaInsets();
     const {setMainColors} = useContext(GradientContext);
   
    const getPosterColors = async( index: number ) => {
        const movie = nowPlaying![index]
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path}`

        
        const {primary='green', secondary='orange'}= await getImageColors(uri)
        console.log(movie.title, primary, secondary)
        
        setMainColors({primary, secondary}) 
    }

    useEffect(() => {
        if( nowPlaying.length > 0 ) {
            getPosterColors(0)
        }
    }, [ nowPlaying ])

    if (isLoading) {
        return(
            <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }
    
    
    
    return (
       <Background>
        <ScrollView>
       
        <View style={{ marginTop: top}}>
          <View style={{ height:440}}>
          <Carousel
            data={nowPlaying!}
            renderItem={( {item }: any)=>  <MovieCard movie= {item}/> }
            sliderWidth={screenWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.8}
            onSnapToItem= { index => getPosterColors(index)}
           />

          </View>
          
        {/* Peliculas populares */}
           <HorizontalSlider title="Popular" movies={popular!}/>
           <HorizontalSlider title="Top Rated" movies={topRated!}/>
           <HorizontalSlider title="Up Coming" movies={upComing!}/>
        </View>

        </ScrollView> 

        </Background>
    )
}


