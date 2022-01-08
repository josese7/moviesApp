
import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';

import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: screenWidth } = Dimensions.get('window');
export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
    const {top} = useSafeAreaInsets();
    if (isLoading) {
        return(
            <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }
    
    return (
        <ScrollView>
       
        <View style={{ marginTop: top}}>
          <View style={{ height:440}}>
          <Carousel
            data={nowPlaying!}
            renderItem={( {item }: any)=>  <MovieCard movie= {item}/> }
            sliderWidth={screenWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.8}
           />

          </View>
          
        {/* Peliculas populares */}
           <HorizontalSlider title="Popular" movies={popular!}/>
           <HorizontalSlider title="Top Rated" movies={topRated!}/>
           <HorizontalSlider title="Up Coming" movies={upComing!}/>
        </View>

        </ScrollView> 
    )
}
