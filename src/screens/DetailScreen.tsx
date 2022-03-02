
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity} from 'react-native';
import { Navigation, RootStackParams } from '../navigation/Navigation';
import  Icon  from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { DetailMovie } from '../components/DetailMovie';

interface Props extends StackScreenProps <RootStackParams, 'DetailScreen'>{};

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({route, navigation}: Props ) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path}`

    const { cast, isLoading, movieFull} = useMovieDetails(movie.id)
    
    console.log({isLoading});
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
            <Image source= { {uri}} style= { styles.posterImage} />
        </View>
        <View style={styles.marginContainer}>
            <Text style={styles.subtitle}>{movie.original_title}</Text>
            <Text style={styles.title}>{movie.title}</Text>
        </View>
       {
           isLoading
           ? <ActivityIndicator size={40} color='grey' style={{ marginTop: 20}}/>
           : <DetailMovie movieFull={ movieFull!} cast= { cast}/>
       }
      {/* Boton para cerrar */}

      <View style={ styles.backButton}>
          <TouchableOpacity
              onPress={()=> navigation.pop() }
          >
              <Icon
                color="white"
                name="arrow-back-outline"
                size={ 60 }
              />
          </TouchableOpacity>
      </View>
        </ScrollView>
        
    )
}

const styles= StyleSheet.create({
    imageContainer:{
        width:'100%',
        height: screenHeight * 0.7,
        paddingBottom:3,
        //backgroundColor: 'red',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,

        borderBottomEndRadius:25,
        borderBottomStartRadius:25
    },
    posterImage:{
        flex: 1,
 
    },
    marginContainer:{
        marginHorizontal: 20,
        marginTop:20
    },
    subtitle:{
        fontSize:16,
        opacity: 0.5,
    },
    title:{
        fontSize:20,
        fontWeight: 'bold',
    },
    backButton:{
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top:30,
        left: 5 
    }
    
})
